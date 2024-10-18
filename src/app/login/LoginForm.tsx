'use client';

import React from 'react';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Typography from '@/components/Typography';

const formSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: 'Username phải có ít nhất 3 ký tự.',
    })
    .max(16, { message: 'Username phải ít hơn 16 ký tự.' })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: 'Username chỉ chứa ký tự chữ, số và dấu gạch dưới.',
    }),
  password: z
    .string()
    .min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự.' })
    .max(20, { message: 'Mật khẩu phải ít hơn 20 ký tự.' }),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // TODO: Login logic here
  }
  return (
    <Form {...form}>
      <div className="flex flex-col gap-2 justify-center items-center">
        <Typography title="Đăng nhập" variant="subtitle" />
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username:</FormLabel>
                <FormControl>
                  <Input placeholder="example123" {...field} />
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
                <FormLabel>Mật khẩu:</FormLabel>
                <FormControl>
                  <Input placeholder="*******" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Đăng nhập</Button>
        </form>
      </div>
    </Form>
  );
};

export default LoginForm;
