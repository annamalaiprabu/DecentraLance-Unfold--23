import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UrlField from './UrlField';
import { onboardingActions } from '@/store/onboarding-slice';

const Resume = () => {
  const dispatch = useDispatch();

  const { linkedInUrl, linkedInUrlError } = useSelector(
    (state) => state.onboarding
  );

  const handleLinkedInUrl = (url) => {
    dispatch(onboardingActions.setLinkedInUrl(url));
  };

  const setLinkedInUrlError = (error) => {
    dispatch(onboardingActions.setLinkedInUrlError(error));
  };

  return (
    <div className="w-full h-full bg-white flex-shrink-0 max-w-xl mx-auto">
      <h1 className="text-[2rem] text-primary-text font-semibold leading-[125%] text-center mb-[1.5rem]">
        Social Links
      </h1>
      <div className="mt-[13px] px-3 mb-[20px]">
        <UrlField
          label="Add your GitHub URL"
          errorMessage="URL protocol required (e.g. https://)"
          Url={linkedInUrl}
          setUrl={handleLinkedInUrl}
          UrlError={linkedInUrlError}
          setUrlError={setLinkedInUrlError}
          placeholder="https://www.linkedin.com/in/yourprofile"
        />
        <UrlField
          label="Add your Twitter URL"
          errorMessage="URL protocol required (e.g. https://)"
          Url={linkedInUrl}
          setUrl={handleLinkedInUrl}
          UrlError={linkedInUrlError}
          setUrlError={setLinkedInUrlError}
          placeholder="https://www.linkedin.com/in/yourprofile"
        />
        <UrlField
          label="Add your LinkedIn URL"
          errorMessage="URL protocol required (e.g. https://)"
          Url={linkedInUrl}
          setUrl={handleLinkedInUrl}
          UrlError={linkedInUrlError}
          setUrlError={setLinkedInUrlError}
          placeholder="https://www.linkedin.com/in/yourprofile"
        />
      </div>
      {/* Upload resume */}
    </div>
  );
};

export default Resume;
