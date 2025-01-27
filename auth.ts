import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcryptjs';

async function getUser(email: string): Promise<User | null> {
    const prisma = new PrismaClient();
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        })
        return user;

    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;

                    if (user.password) {
                        const unHashed: string = user.password; // Se asegura que sea string
                        const passwordsMatch = await bcrypt.compare(password, unHashed);

                        if (passwordsMatch) {
                            return user
                        };
                    } else {
                        return null;
                    }

                }

            },
        }),
    ],
});