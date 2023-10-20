import React from 'react';
import ExperienceCard from './ExperienceCard';
import Image from 'next/image';
import BluePlusLogo from '@/assets/BluePlusLogo.svg'; // Ensure path is correct

const Education = ({
  experiences,
  updateCompanyName,
  updateStartDate,
  updateEndDate,
  addExperience,
  removeExperience,
}) => {
  return (
    <div className="w-full h-full mx-auto max-w-xl">
      <div>
        <div className="flex flex-col gap-[2.75rem]">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              <ExperienceCard
                experience={experience}
                updateCompanyName={(value) => updateCompanyName(index, value)}
                updateStartDate={(value) => updateStartDate(index, value)}
                updateEndDate={(value) => updateEndDate(index, value)}
              />
              {index > 0 && (
                <button
                  className="absolute top-0 right-0 leading-[130%] text-text-red text-[0.875rem]"
                  onClick={() => removeExperience(index)}>
                  <span className="ml-1 leading-[130%]">Remove Experience</span>
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="mt-[13px]">
          <button
            className="text-[0.875rem] px-[1rem] p-[0.5rem] rounded-full leading-[130%] text-[#0064E1] font-medium border border-[#0064E1] flex items-center"
            onClick={addExperience}>
            <Image src={BluePlusLogo} alt="plus logo" className="w-3 h-3" />
            <span className="ml-1 leading-[130%]">Add another Experience</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
