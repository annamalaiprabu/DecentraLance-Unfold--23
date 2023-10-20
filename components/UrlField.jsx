import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import ErrorIcon from '../assets/exclamatory.svg';

const UrlField = ({
  label,
  errorMessage,
  Url,
  setUrl,
  UrlError,
  setUrlError,
  placeholder,
}) => {
  const [isFirstTime, setIsFirstTime] = useState(true);

  const isValidUrl = (url) => {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return urlPattern.test(url);
  };

  const handleInput = (e) => {
    setUrl(e.target.value);

    // Only check for URL validity after the first focus
    if (!isFirstTime) {
      isValidUrl(e.target.value) === false
        ? setUrlError(true)
        : setUrlError(false);
    }
  };

  const checkisValid = () => {
    if (isFirstTime) {
      setIsFirstTime(false);
    } else {
      if (isValidUrl(Url) === false) {
        setUrlError(true);
      }
    }
  };

  return (
    <div>
      <label
        htmlFor="email"
        className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]">
        {label}
      </label>
      <input
        type="text"
        name="url"
        id="url"
        value={Url}
        placeholder={placeholder}
        onChange={handleInput}
        onBlur={checkisValid}
        className={`w-full text-[1rem] bg-white h-12 rounded py-[0.1rem] px-[0.875rem] mb-[0.8125rem]  text-primary-text border border-light-gray focus:outline-black`}
      />
      {UrlError && Url.length > 0 && (
        <p className="text-[0.75rem] leading-[125%] font-normal text-text-red flex items-center mt-[0.15rem]  ">
          <Image
            src={ErrorIcon}
            alt="Error Icon"
            width={16}
            height={16}
            className="bg-text-red w-5 h-5 rounded-full"
          />
          <span className="pl-[0.625rem]">
            {errorMessage ? errorMessage : 'Please enter a valid URL'}
          </span>
        </p>
      )}
    </div>
  );
};

export default UrlField;
