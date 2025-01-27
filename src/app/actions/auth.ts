import { redirect } from "next/navigation";
import { FormState, SignupFormSchema } from "../lib/definitions"


export async function signup(state: FormState, formData: FormData) {
    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        lastname: formData.get('lastname'),
        wa_id: formData.get('wa_id'),
        email: formData.get('email'),
        password: formData.get('password'),
    });
    const body = JSON.stringify(validatedFields);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    } else {
        let result = await fetch('/api/user', { body, method: 'POST' });

        if(result.status === 200) {
            redirect('/home');
        }
    }

    // const { name, email, password } = validatedFields.data;


}