import CagetoriesCard from '@/components/CagetoriesCard';
import Header from '@/components/Header';
import Sidebar, { SIDE_BAR_WIDTH } from '@/components/Sidebar';
import React from 'react';

import Typography from '@/components/Typography';
import FoodCard from '@/components/FoodCard';

const MenuPage = () => {
  return (
    <div className="flex w-screen h-screen bg-black">
      <Sidebar />
      <main className={`w-full bg-slate-200 flex flex-col overflow-y-auto`}>
        {/* header */}
        <Header pageName="Menu" />

        <div className="p-4 w-full">
          <Typography title="Cagetories:" variant="title" />
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
          <Typography title="Món ăn của bạn:" variant="title" />
          <div
            className={`w-[calc(100vw-${SIDE_BAR_WIDTH}px)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center`}
          >
            <FoodCard
              title="Cơm gà xối mỡ"
              price="42.000đ"
              cagetory="Cơm chiên"
            />
            <FoodCard
              title="Cơm gà xối mỡ"
              price="42.000đ"
              cagetory="Cơm chiên"
            />
            <FoodCard
              title="Cơm gà xối mỡ"
              price="42.000đ"
              cagetory="Cơm chiên"
            />
            <FoodCard
              title="Cơm gà xối mỡ"
              price="42.000đ"
              cagetory="Cơm chiên"
            />
            <FoodCard
              title="Cơm gà xối mỡ"
              price="42.000đ"
              cagetory="Cơm chiên"
            />
            <FoodCard
              title="Cơm gà xối mỡ"
              price="42.000đ"
              cagetory="Cơm chiên"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuPage;
