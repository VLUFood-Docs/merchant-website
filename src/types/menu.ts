interface MenuType {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string[];
  optional?: MenuType[];
  createdAt: string;
  updatedAt: string;
}
