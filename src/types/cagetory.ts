import { RestaurantType } from './restaurant';

type CategoryType = {
  category_id: string; // ID duy nhất của danh mục
  restaurant_id: string; // ID của nhà hàng
  category_name: string; // Tên danh mục
  category_description?: string; // Mô tả về danh mục (có thể là null)
  created_at?: Date; // Thời gian tạo (có thể là null)
  updated_at?: Date; // Thời gian cập nhật (có thể là null)
  restaurant: RestaurantType; // Nhà hàng mà danh mục thuộc về
};

export type { CategoryType };
