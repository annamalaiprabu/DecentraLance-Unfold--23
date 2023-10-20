import React from 'react';
import UrlField from './UrlField';

const Resume = ({
  linkedInUrl,
  setLinkedInUrl,
  linkedInUrlError,
  setLinkedInUrlError,
  githubUrl,
  setGithubUrl,
  githubUrlError,
  setGithubUrlError,
  twitterUrl,
  setTwitterUrl,
  twitterUrlError,
  setTwitterUrlError,
}) => {
  return (
    <div className="w-full h-full bg-white flex-shrink-0 max-w-xl mx-auto">
      <h1 className="text-[2rem] text-primary-text font-semibold leading-[125%] text-center mb-[1.5rem]">
        Social Links
      </h1>
      <div className="mt-[13px] px-3 mb-[20px]">
        <UrlField
          label="Add your LinkedIn URL"
          errorMessage="URL protocol required (e.g. https://)"
          Url={linkedInUrl}
          setUrl={setLinkedInUrl}
          UrlError={linkedInUrlError}
          setUrlError={setLinkedInUrlError}
          placeholder="https://www.linkedin.com/in/yourprofile"
        />
        <UrlField
          label="Add your GitHub URL"
          errorMessage="URL protocol required (e.g. https://)"
          Url={githubUrl}
          setUrl={setGithubUrl}
          UrlError={githubUrlError}
          setUrlError={setGithubUrlError}
          placeholder="https://www.github.com/yourprofile"
        />
        <UrlField
          label="Add your Twitter URL"
          errorMessage="URL protocol required (e.g. https://)"
          Url={twitterUrl}
          setUrl={setTwitterUrl}
          UrlError={twitterUrlError}
          setUrlError={setTwitterUrlError}
          placeholder="https://www.twitter.com/yourprofile"
        />
      </div>
      {/* Upload resume */}
    </div>
  );
};

export default Resume;
