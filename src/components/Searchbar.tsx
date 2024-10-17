import React from 'react';

import { CiSearch } from 'react-icons/ci';

const Searchbar = () => {
  return (
    <div className="max-w-[300px] h-fit p-1 rounded-sm bg-slate-300 flex gap-1 items-center">
      <CiSearch />
      <input
        type="text"
        placeholder="Tìm kiếm..."
        className="w-full h-full bg-transparent text-white outline-none placeholder:text-white truncate"
      />
    </div>
  );
};

export default Searchbar;
