import { PrismaClient, Role } from "@prisma/client";
import bcrypt from 'bcryptjs';

async function getRole(prisma: PrismaClient): Promise<Role | null> {
    try {
        const role = await prisma.role.findUnique({
            where: {
                name: 'USER',
            },
        })

        
        return role;

    } catch (error) {
      console.error('Failed to fetch role:', error);
      throw new Error('Failed to fetch role.');
    }
}


export async function POST(req: Request) {
  const body = await req.json();
  const prisma = new PrismaClient();

  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(body.data.password, salt);
  const role = await getRole(prisma);

  const data: any = {
    name: body.data.name,
    lastname: body.data.lastname,
    password: hash,
    email: body.data.email,
    wa_id: body.data.wa_id.slice(-10),
    role: { connect: { id: role?.id } },
    status: 'ACTIVE',
  };
  const user = await prisma.user.create({
    data
  });

  return Response.json({ success: true, user });
}