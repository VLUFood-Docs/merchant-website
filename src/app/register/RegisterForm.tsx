'use client';

import React from 'react';

import { z } from 'zod';
import axios from 'axios';
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
import { useRouter } from 'next/navigation';

const formSchema = z
  .object({
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
      .max(20, { message: 'Mật khẩu phải ít hơn 20 ký tự.' })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
        message: 'Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường và 1 số',
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Mật khẩu không khớp.',
  });

const RegisterForm = () => {
  const navigate = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .post('/api/v1/restaurant', values)
      .then((res) => {
        if (res.status === 201) {
          alert('Đăng ký thành công!');
          setTimeout(() => {
            navigate.push('/');
          }, 1500);
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert('Username này đã được tạo tài khoản!');
        } else {
          alert('Đăng ký thất bại! Vui lòng thử lại sau.');
        }
      });
  }
  return (
    <Form {...form}>
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nhập lại mật khẩu:</FormLabel>
              <FormControl>
                <Input placeholder="*******" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Đăng ký</Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
