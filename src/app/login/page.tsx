"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginSchema, LoginShemaType } from '@/schema/login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
<<<<<<< HEAD
// import axios from 'axios'
import { signIn } from 'next-auth/react'
=======
import axios from 'axios'
import { useRouter } from 'next/navigation'
>>>>>>> 41d39edd2c954b57c6c432f99e0ab5e8546bd2e1
import React from 'react'
import { useForm } from "react-hook-form"
import { toast } from 'sonner'

const Login = () => {

  const form = useForm<LoginShemaType>({
    defaultValues: {
      email: "",
      password: "",
    }, 
    resolver: zodResolver(LoginSchema)
  })

  async function handelLogin(value: LoginShemaType) {
    // try {
    //   const { data } = await axios.post(
    //     "https://ecommerce.routemisr.com/api/v1/auth/signin",
    //     value
    //   )

    //   console.log(data)

    //   if (data.token) {
    //     localStorage.setItem("token", data.token)
    //   }

    //   toast.success(data.message, {
    //     position: "top-center",
    //     duration: 2000,
    //   })

    //   router.push("/")
    // } catch (error) {
    //   toast.error(error.response?.data?.message || "Login failed", {
    //     position: "top-center",
    //     duration: 2000,
    //   })
    // }

		const res = await signIn('credentials', {
			email: value.email,
			password: value.password,
			redirect: false,
			callbackUrl: '/',
		});

		if (res?.ok) {
			toast.success('Login successful', {
				duration: 2000,
				position: 'top-center',
			});
			window.location.href = res.url || '/';
		}
		else{
			toast.error(res?.error , {
				duration: 2000,
				position: 'top-center',
			})
		}

  }

  return (
    <div className='mx-auto px-5 md:px-0 w-[60%] my-12 md:w-1/2'>
      <h1 className='text-5xl text-center font-bold mb-10'>Login Form</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handelLogin)}>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input type='email' className='mb-6' {...field} />
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

          <Button className='w-full mt-5'>Login Now</Button>
        </form>
      </Form>
    </div>
  )
}

export default Login
