import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  return (
    <div className="p-10 bg-secondary rounded-2xl">
      <div className="flex items-center ">
        <div className="w-[6px] h-10 rounded-lg bg-accent"></div>
        <div className="ml-4 font-semibold tracking-wider leading-3 text-2xl text-white">
          Projects
        </div>
      </div>
      <div className="mt-10">
        <ProjectCard
          projectTitle={'Project Title'}
          projectDescription={
            'Lorem ipsum is used to demonstrate the visual form of a document or typeface without relying on meaningful content. It can be used as a placeholder before final copy is available'
          }
          status={'completed'}
          budget={'1000'}
          date={"July '23"}
          domains={'Web Development'}
        />
      </div>
    </div>
  );
};

export default ProjectSection;
