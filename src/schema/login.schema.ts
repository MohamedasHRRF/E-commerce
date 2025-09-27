import * as z from 'zod';


 export const LoginSchema = z.object( {
    email: z.email("invalid email"),
    password: z.string().min(6,"min is 6"),
    })




export type LoginShemaType=z.infer<typeof LoginSchema>