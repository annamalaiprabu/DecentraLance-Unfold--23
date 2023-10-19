import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';

const ProjectCard = ({
  projectTitle,
  projectDescription,
  date,
  status,
  budget,
  domains,
}) => {
  return (
    <div className=" max-w-sm  hover:shadow-lg transition-all ease-in-out rounded-xl ">
      <div className="border border-secondary  cursor-pointer max-w-sm bg-tertiary shadow-xl  rounded-xl text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <AiOutlineClockCircle className="w-6 h-6" />
            <p className="text-base leading-[1.125]">{date}</p>
          </div>
          <div
            className={`rounded-full leading-3 ${
              status == 'completed' && 'bg-green-300 text-green-800'
            } ${
              status == 'progress' && 'bg-yellow-300 text-yellow-800'
            } text-xs px-2 py-1 capitalize`}>
            {status}
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xl font-semibold tracking-wider text-white leading-normal capitalize truncate">
            {projectTitle}
          </p>
          <p className="text-sm line-clamp-2 mt-2">{projectDescription}</p>
          <div className="flex justify-between gap-4 items-center mt-4">
            <div className="rounded-full  w-fit leading-3 bg-blue-300 text-blue-800 text-xs p-2">
              {domains}
            </div>
            <div>
              Budget : <span>${budget}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
