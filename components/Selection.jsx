import React from 'react';

const Selection = ({ isTrue, setSelection, label1, label2 }) => {
  return (
    <div>
      <p className="text-primary-text text-[0.875rem] mb-[10px] font-semibold">
        {label1}
      </p>
      <p className="text-secondary-text text-[0.875rem] font-nomarl mb-[15px]">
        {label2}
      </p>
      <div className="flex items-center w-full rounded border border-primary-text divide-x-[1px] divide-primary-text">
        <div
          onClick={() => setSelection(true)}
          className={`flex-1 text-center p-2 text-[0.875rem] leading-[130%] cursor-pointer rounded-l ${
            isTrue === true
              ? ' bg-primary-text text-white font-semibold'
              : 'bg-white text-secondary-text font-normal'
          }`}>
          Yes
        </div>
        <div
          onClick={() => setSelection(false)}
          className={`flex-1 text-center p-2 text-[0.875rem] leading-[130%] cursor-pointer rounded-r ${
            isTrue === false
              ? ' bg-primary-text text-white font-semibold'
              : 'bg-white text-secondary-text font-normal'
          }`}>
          No
        </div>
      </div>
    </div>
  );
};

export default Selection;
