import { CategoryType } from './cagetory';

type RestaurantType = {
  restaurants_id: string; // ID duy nhất của nhà hàng
  restaurants_name?: string; // Tên nhà hàng (có thể là null)
  restaurants_description?: string; // Mô tả về nhà hàng (có thể là null)
  created_at?: Date; // Thời gian tạo (có thể là null)
  categories: CategoryType[]; // Danh sách các danh mục
  username: string; // Tên người dùng (duy nhất)
  password: string; // Mật khẩu
  email?: string; // Email (có thể là null)
  phone?: string; // Số điện thoại (có thể là null)
  address?: string; // Địa chỉ (có thể là null)
  time_open?: string; // Giờ mở cửa (có thể là null)
  time_close?: string; // Giờ đóng cửa (có thể là null)
};

export type { RestaurantType };
