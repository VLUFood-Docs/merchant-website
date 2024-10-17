import React from 'react';

import Image, { StaticImageData } from 'next/image';
import DefaultCategoryImage from '@/app/assets/images/default-category-image.jpg';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

interface CagetoriesCardProps {
  title: string;
  image?: StaticImageData;
  amount: number;
}

const CagetoriesCard = ({ title, image, amount }: CagetoriesCardProps) => {
  if (!image) image = DefaultCategoryImage;
  return (
    <Card className="min-w-[200px]">
      <CardHeader className="p-0">
        <Image
          src={image}
          alt="categoryPicture"
          className="object-cover rounded-xl"
          height={200}
          width={200}
        />
      </CardHeader>
      <CardContent className="p-0">
        <p className="font-bold">{title}</p>
      </CardContent>
      <CardFooter className="p-0 w-full">
        <div className="flex justify-between px-2 w-full items-center">
          <p>Tổng số món:</p>
          <p>{amount}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CagetoriesCard;
