import React from 'react';

import Image, { StaticImageData } from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import DefaultFoodImage from '@/app/assets/images/default-food-image.jpg';

interface FoodCardProps {
  title: string;
  image?: StaticImageData;
  price: string;
  category: string;
}

const FoodCard = ({ title, image, price, category }: FoodCardProps) => {
  if (!image) image = DefaultFoodImage;
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <Image
          src={image}
          alt="foodPicture"
          className="object-cover rounded-lg"
          height={300}
          width={300}
        />
      </CardHeader>
      <CardContent className="p-0">
        <p className="font-bold">{title}</p>
      </CardContent>
      <CardFooter className="p-0 w-[300px] py-1 flex flex-col">
        <div className="flex justify-between px-2 w-full items-center">
          <p>Giá:</p>
          <p>{price}</p>
        </div>
        <div className="flex justify-between px-2 w-full items-center">
          <p>Phân loại:</p>
          <p>{category}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
