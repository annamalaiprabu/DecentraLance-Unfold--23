import React from 'react';
import Image from 'next/image';
import ProfilePhoto from '@/assets/profile.webp';
import LoyalBadge from '@/assets/loyal.webp';

const ProfileHead = () => {
  return (
    <div className="">
      <div className="bg-secondary rounded-3xl text-white max-w-[1280px] p-10 mx-auto">
        <div className="flex items-center ">
          <div className="w-[6px] h-10 rounded-lg bg-accent"></div>
          <div className="ml-4 font-semibold tracking-wider leading-3 text-2xl text-white">
            Profile Details
          </div>
        </div>
        {/* Profile Image */}
        <div className="flex gap-5 mt-10 items-start">
          <div className="w-[10rem] h-[10rem] mr-5">
            <Image
              src={ProfilePhoto}
              alt="profile image"
              className="rounded-full object-cover"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col ml-5 w-full justify-start">
            <h1 className="text-[2rem] leading-[1.5] font-semibold">
              Balaganesh K
            </h1>
            <div className="flex  gap-5 mt-6 justify-between ">
              <div className="flex flex-1 flex-col bg-tertiary rounded-xl border-2 border-secondary shadow-lg px-4 py-3">
                <p className="text-[#aaa] text-sm">Specilazied</p>
                <p className="text-base text-white font-semibold mt-1 truncate ">
                  Full Stack Developer
                </p>
              </div>
              <div className="flex flex-1 flex-col bg-tertiary rounded-xl border-2 border-secondary shadow-lg px-4 py-3">
                <p className="text-[#aaa] text-sm">Wallet ID</p>
                <p className="text-base text-white font-semibold mt-1 truncate">
                  0x.eeeeeeeeeekjkj.eth
                </p>
              </div>
              <div className="flex flex-1 flex-col bg-tertiary rounded-xl border-2 border-secondary shadow-lg px-4 py-3">
                <p className="text-[#aaa] text-sm">Email</p>
                <p className="text-base text-white font-semibold mt-1 truncate">
                  k.balaganesh26@gmail.com
                </p>
              </div>
              <div className="flex flex-1 flex-col bg-tertiary rounded-xl border-2 border-secondary shadow-lg px-4 py-3 bg-blend-overlay">
                <p className="text-[#aaa] text-sm">Badge</p>
                <Image
                  src={LoyalBadge}
                  alt="profile image"
                  className="bg-blend-overlay"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
