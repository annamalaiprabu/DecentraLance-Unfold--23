import React, { useEffect, useState } from 'react';
import MonthYear from './MonthYear';
import Input from './Input';

const EducationCard = () => {
  const [startPeriod, setStartPeriod] = useState('');
  const [endPeriod, setEndPeriod] = useState('');
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [collage, setCollage] = useState('');

  useEffect(() => {
    if (currentlyWorking) {
      setEndPeriod('');
    }
  }, [currentlyWorking]);

  return (
    <div className="w-full flex flex-col gap-[13px]">
      <div className="">
        <Input
          label="Company Name"
          placeholder="Eg : Google"
          inputValue={collage}
          setInputValue={setCollage}
        />
      </div>

      <div className="flex gap-6 ">
        <div className="flex-1">
          <MonthYear
            label="Start year"
            period={startPeriod}
            setPeriod={setStartPeriod}
          />
        </div>
        <div className="flex-1">
          <div className={`${currentlyWorking && 'opacity-0'}`}>
            <MonthYear
              label="End year"
              period={endPeriod}
              setPeriod={setEndPeriod}
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-5 h-5 mr-2"
              checked={currentlyWorking}
              onChange={() => setCurrentlyWorking(!currentlyWorking)}
            />
            <span>Is Currently Working</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
