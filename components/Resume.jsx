import React from 'react';
import DragDrop from '@/components/DragDrop';

const Authorization = ({ resumeUrl, setResumeUrl }) => {
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-full bg-white flex-shrink-0 max-w-xl mx-auto">
      <div className="px-3">
        <p className="text-primary-text text-[0.75rem] font-semibold leading-[130%]">
          Resume <span className="text-secondary-text font-normal">(opt.)</span>
        </p>
        <div className="mt-3 h-[7.1875rem]">
          <DragDrop handleFileSelect={handleFileSelect} document={resumeUrl} />
        </div>
      </div>
    </div>
  );
};

export default Authorization;
