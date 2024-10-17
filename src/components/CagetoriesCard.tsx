import Image, { StaticImageData } from 'next/image';
import React from 'react';

import DefaultCagetoryImage from '@/app/assets/images/default-cagetory-image.jpg';

interface CagetoriesCardProps {
  title: string;
  image?: StaticImageData;
  amount: number;
}

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

const CagetoriesCard = ({ title, image, amount }: CagetoriesCardProps) => {
  if (!image) image = DefaultCagetoryImage;
  return (
    <Card className="min-w-[200px]">
      <CardHeader className="p-0">
        <Image
          src={image}
          alt="cagetoryPicture"
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
