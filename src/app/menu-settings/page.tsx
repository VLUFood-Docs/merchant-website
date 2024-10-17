'use client';

import React from 'react';

import { FaPlus } from 'react-icons/fa';

import Header from '@/components/Header';
import FoodCard from '@/components/FoodCard';
import Typography from '@/components/Typography';
import CagetoriesCard from '@/components/CagetoriesCard';
import Sidebar, { SIDE_BAR_WIDTH } from '@/components/Sidebar';
import AddCategoryDialog from '@/app/menu-settings/AddCategoryDialog';

interface AddFoodProps {
  type: 'category' | 'food';
}

const AddFood = ({ type }: AddFoodProps) => {
  return (
    <div className="flex items-center gap-2 p-2 bg-destructive rounded-md text-primary-foreground">
      <FaPlus />
      <p>Thêm mới</p>
    </div>
  );
};

const MenuPage = () => {
  return (
    <div className="flex w-screen h-screen bg-black">
      <Sidebar />
      <main className={`w-full bg-slate-200 flex flex-col overflow-y-auto`}>
        {/* header */}
        <Header pageName="Menu" />

        <div className="p-4 w-full">
          <div className="flex items-center gap-4">
            <Typography title="Cagetories:" variant="title" />
            <AddFood type="category" />
          </div>
          <div
            className={`flex gap-2 overflow-x-auto w-[calc(100vw-${SIDE_BAR_WIDTH}px)] justify-center`}
          >
            <CagetoriesCard title="Cơm Chiên" amount={1} />
            <CagetoriesCard title="Cơm Chiên" amount={1} />
            <CagetoriesCard title="Cơm Chiên" amount={1} />
            <CagetoriesCard title="Cơm Chiên" amount={1} />
            <CagetoriesCard title="Cơm Chiên" amount={1} />
            <CagetoriesCard title="Cơm Chiên" amount={1} />
            <CagetoriesCard title="Cơm Chiên" amount={3} />
          </div>
        </div>

        <div className="p-4 w-full">
          <div className="flex items-center gap-4">
            <Typography title="Món ăn của bạn:" variant="title" />
            <AddCategoryDialog children={<AddFood type="food" />} />
          </div>
          <div
            className={`w-[calc(100vw-${SIDE_BAR_WIDTH}px)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center`}
          >
            <FoodCard
              title="Cơm gà xối mỡ"
              price="42.000đ"
              category="Cơm chiên"
            />
            <FoodCard
              title="Cơm gà xối mỡ"
              price="42.000đ"
              category="Cơm chiên"
            />
            <FoodCard
              title="Cơm gà xối mỡ"
              price="42.000đ"
              category="Cơm chiên"
            />
            <FoodCard
              title="Cơm gà xối mỡ"
              price="42.000đ"
              category="Cơm chiên"
            />
            <FoodCard
              title="Cơm gà xối mỡ"
              price="42.000đ"
              category="Cơm chiên"
            />
            <FoodCard
              title="Cơm gà xối mỡ"
              price="42.000đ"
              category="Cơm chiên"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuPage;
