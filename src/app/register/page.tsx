"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { registerSchema, RegisterShemaType } from '@/schema/register.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from "next/navigation"
import React from 'react'
import { useForm } from "react-hook-form"
import { toast } from 'sonner'
import axios from 'axios'
const Register = () => {

const router=useRouter()

  const form = useForm<RegisterShemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""

    }, 
    resolver:zodResolver(registerSchema)
  })




async  function handelRegister(value:RegisterShemaType) {
    try{
        const {data}= await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", value)
        console.log(data);
      toast.success(data.message,
        {
          position:"top-center",
          duration:2000
        }
      )

      router.push("/login")
    }
    catch(error){

       toast.error(error.response.data.message,
        {
          position:"top-center",
          duration:2000
        }
      )
    }


  }

  return (
    <div className='mx-auto px-5 md:px-0 w-[60%] my-12 md:w-1/2'>
      <h1 className='text-5xl text-center font-bold mb-10'>Register Form</h1>



      <Form {...form}>
        <form onSubmit={form.handleSubmit(handelRegister)}>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type='text' className='mb-6'  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input type='email' className='mb-6'  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
      
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input type='password' className='mb-6' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input type='password' className='mb-6' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>phone</FormLabel>
                <FormControl>
                  <Input type='tel' className='mb-6' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className='w-full mt-5'>Register Now</Button>
        </form>
      </Form>
    </div>


  )
}

export default Register
