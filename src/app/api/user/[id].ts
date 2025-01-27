import { getSession } from "next-auth/react"; // Usa esto si usas NextAuth
import { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  // Obtén la sesión del usuario autenticado
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "No autorizado" });
  }

  try {
    // Obtén el ID del usuario autenticado (por ejemplo, desde la sesión)
    const userEmail = session?.user?.email;

    // Busca el usuario en la base de datos
    const user = await Prisma.user.findUnique({
      where: { email: userEmail },
      select: {
        id: true,
        name: true,
        email: true,
        wa_id: true,
        status: true,
        role: {
          select: { name: true },
        },
        manager: {
          select: { id: true, name: true, email: true },
        },
        clients: {
          select: {
            id: true,
            name: true,
            email: true,
            wa_id: true,
            status: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}
