import React from 'react';
import Image from 'next/image';

import LogoImage from '@/app/assets/images/logo.png';

const Logo: React.FC = () => {
  return (
    <Image
      width={500}
      height={500}
      loading="lazy"
      src={LogoImage}
      alt="VLUFood - Docs"
      className="object-contain self-center mt-8 max-w-full aspect-[1.76] w-[500px]"
    />
  );
};

export default Logo;
