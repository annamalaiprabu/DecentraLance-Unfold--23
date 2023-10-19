import React, { useState } from 'react';
import InputField from './InputField';
import DropDown from './DropDown';
import EmailField from './EmailField';
import Input from './Input';
import MobileNumberFeild from './MobileNumberFeild';
import Avatar from './Avatar';

const genders = ['He/Him', 'She/Her', 'They/Them'];

const ProfileDetails = () => {
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setAvatarSrc(URL.createObjectURL(file));
  };

  const [avatarSrc, setAvatarSrc] = useState('');
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [alternateEmail, setAlternateEmail] = useState('');
  const [alternateEmailError, setAlternateEmailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const [tagline, setTagline] = useState('');

  return (
    <div className="w-full max-w-[522px] mx-auto">
      <div className="flex justify-center">
        <Avatar
          handleFileSelect={handleFileSelect}
          avatarSrc={avatarSrc}
          setAvatarSrc={setAvatarSrc}
        />
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
            Email={alternateEmail}
            setEmail={setAlternateEmail}
            EmailError={alternateEmailError}
            setEmailError={setAlternateEmailError}
          />
        </div>
        <div className="w-full flex flex-col mobile-lg:flex-row gap-6 mb-[9px]">
          <div className="w-full basis-[50%]">
            <DropDown
              label={'Pronoun'}
              dropdownList={genders}
              placeholder={'Select Pronoun'}
            />
          </div>
        </div>
        <div className="w-full">
          <Input
            label={'Tagline'}
            inputValue={tagline}
            setInputValue={setTagline}
            placeholder={'Tagline'}
          />
        </div>
        <div className="w-full">
          <label className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]">
            About Me
          </label>
          <textarea
            className="w-full h-[100px] resize-none border border-[#d7d7d7] outline-none focus:border-black transition-field duration-[0.25s] focus:shadow-field ease-in-out-expo rounded p-4"
            placeholder="About Me"></textarea>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
