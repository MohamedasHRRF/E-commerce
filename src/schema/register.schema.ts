import * as z from 'zod';


 export const registerSchema = z.object( {
    name: z.string().min(3,"min is 4"),
    email: z.email("invalid email"),
    password: z.string().min(6,"min is 6"),
    rePassword:z.string().min(6,"min is 6"),
    phone: z.string().regex(/^01[0125][0-9]{8}$/,"invalid phone number"  )
    }).refine(function(object){
        if(object.password===object.rePassword){
            return true;
        }
            return false;
    },{path:["rePassword"],
        error:"password is not matched"

    }

)




export type RegisterShemaType=z.infer<typeof registerSchema>