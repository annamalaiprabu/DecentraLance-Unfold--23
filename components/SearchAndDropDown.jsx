import React from 'react';
import Image from 'next/image';
import SearchBox from './SearchBox';
import GrayDownArrow from '@/assets/GrayDownArrow.svg';
import BlueDownArrow from '@/assets/BlueDownArrow.svg';

const SearchAndDropDown = ({
  search,
  setSearch,
  isHover,
  setIsHover,
  selectedSort,
  setSelectedSort,
  sortDropDown,
  setSortDropDown,
}) => {
  return (
    <div className="w-full h-full flex items-center text-primary-text">
      <div className={`w-full h-full pr-2 lg:pr-[27px] `}>
        <SearchBox
          search={search}
          setSearch={setSearch}
          shadow={true}
          crossLogo={true}
        />
      </div>
      {/* sort post */}
      <div className=" text-xs mr-[6px] rounded-full bg-primary relative  uppercase  ">
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="flex items-center gap-2 cursor-pointer px-4  py-[0.15rem]"
          onClick={() => setSortDropDown(!sortDropDown)}>
          <p className={`${isHover ? 'text-link' : 'text-primary-text'}`}>
            {selectedSort}
          </p>
          <Image
            src={isHover ? BlueDownArrow : GrayDownArrow}
            width={10}
            height={10}
            alt="down arrow "
          />
        </div>
        {/* DropDown */}
        {sortDropDown && (
          <div className="absolute top-7 z-[100] right-0 lg:-right-5  w-[6.25rem]  bg-white rounded-lg shadow-button divide-y-[1.5px] text-[0.875rem] leading-[150%]">
            <p
              onClick={() => [setSelectedSort('Hot'), setSortDropDown(false)]}
              className=" text-sm capitalize hover:bg-[#f4f4f4]  cursor-pointer px-3 my-1 py-1">
              Hot
            </p>
            <p onClick={() => [setSelectedSort('New'), setSortDropDown(false)]}>
              <div className=" text-sm capitalize hover:bg-[#f4f4f4]  cursor-pointer my-1 py-1 rounded-b-lg px-3">
                New
              </div>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchAndDropDown;
