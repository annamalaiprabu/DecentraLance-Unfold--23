import React from 'react';
import Image from 'next/image';
import { BiUpArrowCircle } from 'react-icons/bi';

const Avatar = ({ avatarUrl, setAvatarUrl }) => {
  const handelAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`flex-shrink-0 border-[#d7d7d7] w-[7.5rem] h-[7.5rem] xl:w-[11.5rem] xl:h-[11.5rem]  text-center cursor-pointer relative rounded-full border-dashed ${
        !avatarUrl && 'border-2'
      } bg-[#f7f7f7]`}>
      <div className="w-full h-full flex items-center  justify-center absolute top-0 left-0">
        {avatarUrl && (
          <Image
            src={avatarUrl}
            alt="Drag and drop"
            width={64}
            height={64}
            className={`   ${
              avatarUrl
                ? ' h-full w-full object-cover rounded-full '
                : ' h-[4rem] w-[4rem]'
            }`}
          />
        )}
        {!avatarUrl && (
          <div className="flex flex-col items-center ">
            <BiUpArrowCircle className="text-[3rem]  text-[#dedede]" />
            <h1 className="text-[#6c6c6c]"> Add Avatar</h1>
          </div>
        )}
      </div>
      <input
        type="file"
        id="resumeInput"
        className="w-full h-full  absolute top-0 left-0 cursor-pointer opacity-0"
        onChange={handelAvatarChange}
      />
    </div>
  );
};

export default Avatar;
