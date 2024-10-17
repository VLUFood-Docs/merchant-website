import React from 'react';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface AddCategoryDialogProps {
  children: React.ReactNode;
}

const AddCategoryDialog = ({ children }: AddCategoryDialogProps) => {
  const formSchema = z.object({
    categoryName: z
      .string()
      .min(3, {
        message: 'Tên category phải có ít nhất 3 ký tự.',
      })
      .max(50, {
        message: 'Tên category phải ít hơn 50 ký tự.',
      }),
    categoryDescription: z
      .string()
      .max(100, {
        message: 'Mô tả category phải ít hơn 100 ký tự.',
      })
      .optional(),
    createdAt: z.date(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { createdAt: new Date() },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thêm mới Category</DialogTitle>
          <DialogDescription>
            Thêm mới phân loại cho menu quán ăn của bạn.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="categoryName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên phân loại:</FormLabel>
                  <FormControl>
                    <Input placeholder="Cơm chiên" {...field} />
                  </FormControl>
                  <FormDescription>
                    Tên phân loại của món ăn, ví dụ: Cơm chiên, Mì xào, ...
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mô tả:</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Mô tả phân loại" {...field} />
                  </FormControl>
                  <FormDescription>
                    Tên phân loại của món ăn, ví dụ: Cơm chiên, Mì xào, ...
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-4">
              <Button type="submit" variant="destructive">
                Lưu
              </Button>
              <Button variant={'outline'}>Hủy</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategoryDialog;
