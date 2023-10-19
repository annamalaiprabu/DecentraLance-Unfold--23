import React from 'react';

import ProfileHead from '@/components/ProfileHead';
import ProjectSection from '@/components/ProjectSection';

const Client = () => {
  return (
    <main className={` bg-primary px-16 pb-16`}>
      <div className="py-8">
        <ProfileHead />
      </div>
      <div>
        <ProjectSection />
      </div>
    </main>
  );
};

export default Client;
