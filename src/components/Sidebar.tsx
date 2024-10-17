'use client';

import React, { useEffect, useState } from 'react';
import NavigateBtn from './NavigateBtn';

import { FaHome } from 'react-icons/fa';
import { IoRestaurantSharp } from 'react-icons/io5';
import { BiFoodMenu } from 'react-icons/bi';
import { MdMenuBook } from 'react-icons/md';
import { TbReportSearch } from 'react-icons/tb';
import { useRouter as Navigation } from 'next/navigation';

export const SIDE_BAR_WIDTH = 300;

const Sidebar = () => {
  const navigate = Navigation();
  const [activePage, setActivePage] = useState<string>('');

  useEffect(() => {
    const currentPath = window.location.pathname.split('/')[1];
    setActivePage(currentPath);
  }, []);

  const handleNavigation = (page: string) => {
    setActivePage(page);
    navigate.push(page);
  };

  const buttonStyle = (page: string) =>
    activePage === page
      ? 'bg-blue-500 text-white hover:bg-blue-600 transition-colors'
      : 'bg-transparent text-black';

  return (
    <div
      className={`w-[${SIDE_BAR_WIDTH}px] h-full bg-white flex flex-col justify-center items-start px-4 py-8`}
    >
      <NavigateBtn
        text="Trang Chủ"
        Icon={<FaHome />}
        showIcon
        onClick={() => handleNavigation('')}
        className={buttonStyle('')}
      />
      <NavigateBtn
        text="Cài đặt quán"
        Icon={<IoRestaurantSharp />}
        showIcon
        onClick={() => handleNavigation('restaurant-settings')}
        className={buttonStyle('restaurant-settings')}
      />
      <NavigateBtn
        text="Cài đặt menu"
        Icon={<BiFoodMenu />}
        showIcon
        onClick={() => handleNavigation('menu-settings')}
        className={buttonStyle('menu-settings')}
      />
      <NavigateBtn
        text="Danh sách đơn"
        Icon={<MdMenuBook />}
        showIcon
        onClick={() => handleNavigation('order-list')}
        className={buttonStyle('order-list')}
      />
      <NavigateBtn
        text="Báo cáo"
        Icon={<TbReportSearch />}
        showIcon
        onClick={() => handleNavigation('reports')}
        className={buttonStyle('reports')}
      />
      <NavigateBtn text="Đăng xuất" onClick={() => {}} />
    </div>
  );
};

export default Sidebar;
