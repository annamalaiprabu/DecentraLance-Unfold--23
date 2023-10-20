import React from 'react';
import InputField from './InputField';
import EmailField from './EmailField';
import MobileNumberFeild from './MobileNumberFeild';
import Avatar from './Avatar';

const ProfileDetails = ({
  avatarUrl,
  setAvatarUrl,
  userName,
  setUserName,
  email,
  setEmail,
  aboutMe,
  setAboutMe,
  phoneNumber,
  setPhoneNumber,
  userNameError,
  setUserNameError,
  emailError,
  setEmailError,
}) => {
  return (
    <div className="w-full max-w-[522px] mx-auto">
      <div className="flex justify-center">
        <Avatar avatarUrl={avatarUrl} setAvatarUrl={setAvatarUrl} />
      </div>
      <div className="flex flex-col gap-[13px]">
        <InputField
          label={'User Name'}
          placeholder={'User Name'}
          errorMessage={'User Name is required'}
          inputValue={userName}
          setInputValue={setUserName}
          isEmpty={userNameError}
          setIsEmpty={setUserNameError}
        />

        <div className="w-full flex flex-col mobile-lg:flex-row gap-6 mt-[1px] mb-[13px]">
          <div className="w-full basis-[50%]">
            <MobileNumberFeild
              label={'Mobile Number'}
              phone={phoneNumber}
              setPhone={setPhoneNumber}
            />
          </div>
        </div>
        <div className="">
          <EmailField
            label={'Email Address'}
            placeholder={'Eg: surajk@vu.edu.in'}
            errorMessage={'Email Address is required'}
            Email={email}
            setEmail={setEmail}
            EmailError={emailError}
            setEmailError={setEmailError}
          />
        </div>

        <div className="w-full">
          <label className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]">
            About Me
          </label>
          <textarea
            onChange={setAboutMe}
            defaultValue={aboutMe}
            className="w-full h-[100px] resize-none border border-[#d7d7d7] outline-none focus:border-black transition-field duration-[0.25s] focus:shadow-field ease-in-out-expo rounded p-4"
            placeholder="About Me"></textarea>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
