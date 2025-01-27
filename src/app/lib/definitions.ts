import { z } from 'zod';

export interface JWTPayload {
  iat?: number; // Tiempo de emisión
  exp?: number; // Tiempo de expiración
  iss?: string; // Emisor
  sub?: string; // Asunto
}

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
  lastname: z
    .string()
    .min(2, { message: 'Lastname must be at least 2 characters long.' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  wa_id: z.string().min(10, { message: 'Please enter a phone number.' }).max(10, { message: 'Please enter a phone number.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
})

export type FormState =
  | {
    errors?: {
      name?: string[]
      lastname?: string[]
      email?: string[]
      wa_id?: string[]
      password?: string[]
    }
    message?: string
  }
  | undefined