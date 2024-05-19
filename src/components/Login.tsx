import React from 'react'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';
import * as z from "zod";
import { Button } from './ui/button';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerWithEmailAndPassword } from '@/actions/supabase';



const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})


const Login = () => {


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await registerWithEmailAndPassword(values)

    const { error, data } = JSON.parse(response)
    if (error) {
      console.warn("sign in erro", error)
    }

  };
  return (
    <main className='border border-gray-700 rounded-md w-4/12 text-gray-300 p-4'>
      <p className='my-2 mb-5 text-center'>Welcome Back</p>
      <Button className='w-full mb-7'>Sign in with GitHub</Button>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <Input placeholder="Enter Email Address" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  )
}

export default Login