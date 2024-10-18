import React from 'react';
import LoginForm from '@/app/login/LoginForm';
import Image from 'next/image';

import LoginGif from '@/app/assets/gifs/login.gif';

const LoginPage = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <main className="flex gap-20 justify-center items-center w-full h-full">
        <LoginForm />
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

export default LoginPage;
