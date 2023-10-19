import React from 'react';
import SearchLogo from '@/assets/SearchLogo.svg';
import Image from 'next/image';
import GrayCrossLogo from '@/assets/crossLogoGray.svg';

const SearchBox = ({ search, setSearch, shadow, crossLogo, fontSize }) => {
  return (
    <div className="relative  rounded-full">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className={`w-full h-[40px] px-11 leading-[150%] text-[1rem] bg-primary rounded-full border-[1px] border-[#f2f2f2] focus:outline-none focus:border-primary-text  ${
          shadow && 'shadow-search'
        } `}
      />
      <div className="absolute top-3 left-3 w-[17px] h-4 flex items-center justify-center">
        <Image src={SearchLogo} alt="Search Logo" />
      </div>
      {search && crossLogo && (
        <div className="absolute top-3 right-3  h-4 flex items-center justify-center cursor-pointer p-1">
          <Image
            src={GrayCrossLogo}
            alt="Gray Cross Logo"
            onClick={() => setSearch('')}
            className="w-[17px] h-[17px]"
          />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
