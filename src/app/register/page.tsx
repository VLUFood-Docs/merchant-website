import Image from 'next/image';
import React from 'react';
import RegisterForm from './RegisterForm';

import LoginGif from '@/app/assets/gifs/login.gif';

const RegisterPage = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <main className="flex gap-20 justify-center items-center w-full h-full">
        <RegisterForm />
        <Image
          src={LoginGif}
          height={836}
          width={634}
          alt="registerGif"
          className=" object-cover rounded-2xl"
        />
      </main>
    </div>
  );
};

export default RegisterPage;
