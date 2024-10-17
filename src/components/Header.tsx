import React from 'react';
import Searchbar from './Searchbar';

import { CiMail } from 'react-icons/ci';
import { IoIosNotifications } from 'react-icons/io';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface HeaderProps {
  pageName: string;
  avatar?: string;
}

const Header = ({ pageName, avatar }: HeaderProps) => {
  return (
    <div className="w-full h-fit px-2 py-4 flex justify-between bg-white items-center">
      <p className="text-[24px] font-bold text-primary">{pageName}</p>
      <div className="flex gap-6 items-center justify-center">
        <div className="hidden md:flex">
          <Searchbar />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <CiMail className="text-2xl text-primary" />
          <IoIosNotifications className="text-2xl text-primary" />
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
