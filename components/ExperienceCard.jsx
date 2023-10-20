import React, { useState, useEffect } from 'react';
import MonthYear from './MonthYear'; // Ensure path is correct
import Input from './Input'; // Ensure path is correct

const ExperienceCard = ({
  experience,
  updateCompanyName,
  updateStartDate,
  updateEndDate,
}) => {
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  useEffect(() => {
    if (currentlyWorking) {
      updateEndDate('', ''); // Clear the end date when currently working is checked
    }
  }, [currentlyWorking]);

  return (
    <div className="w-full flex flex-col gap-[13px]">
      <div>
        <Input
          label="Company Name"
          placeholder="Eg : Google"
          inputValue={experience.companyName}
          setInputValue={updateCompanyName}
        />
      </div>

      <div className="flex gap-6">
        <div className="flex-1">
          <MonthYear
            label="Start year"
            period={experience.startDate}
            setPeriod={updateStartDate}
          />
        </div>
        <div className="flex-1">
          <div className={`${currentlyWorking && 'opacity-0'}`}>
            <MonthYear
              label="End year"
              period={experience.endDate}
              setPeriod={updateEndDate}
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

export default ExperienceCard;
