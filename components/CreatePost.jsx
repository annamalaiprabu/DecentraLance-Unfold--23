/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Tiptap from './Tiptap';
import { useState } from 'react';
import Image from 'next/image';
import CrossLogo from '@/assets/crossLogo.svg';
import DownArrow from '@/assets/GrayDownArrow.svg';
import { useDispatch } from 'react-redux';
import { postsActions } from '../store/posts-slice';
import toast, { Toaster } from 'react-hot-toast';

const authorList = [
  {
    name: 'Balaganesh K',
    imgUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/23.jpg',
  },
  {
    name: 'Sathish Kumar',
    imgUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/24.jpg',
  },
];

const communityList = [
  '🚀 Startup Hub',
  '🌳 Community Building',
  '💱 Crypto Blockchain',
];

const communityList2 = ['General', 'Events'];

const CreatePost = ({ setIsCreatePostOpen, isCreatePostOpen }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState(authorList[0]);
  const [description, setDescription] = useState('');

  const [community, setCommunity] = useState('Select community');
  const [community2, setCommunity2] = useState('Select topic');

  const [isAuthorDropdownOpen, setIsAuthorDropdownOpen] = useState(false);
  const [isCommunityDropdownOpen, setIsCommunityDropdownOpen] = useState(false);
  const [isCommunityDropdownOpen2, setIsCommunityDropdownOpen2] =
    useState(false);

  const postObj = {
    id: `${Math.floor(Math.random() * 100000000000000)}`,
    title: title,
    author: author,
    community: community,
    community2: community2,
    description: description,
    comments: [],
    isLiked: false,
    no_likes: 0,
    hasFollowed: false,
    no_views: 100,
    createAt: new Date().toLocaleString(),
  };

  const clearPost = () => {
    setTitle('');
    setAuthor(authorList[0]);
    setCommunity('Select community');
    setCommunity2('Select topic');
    setDescription('');
  };

  const handelPost = () => {
    setTimeout(() => {
      if (
        title === '' ||
        description === '' ||
        community === 'Select a community' ||
        community2 === 'Select topic'
      ) {
        toast.error('Please fill all the fields');
        return;
      }

      dispatch(postsActions.addPost(postObj));
      console.log(description);
      clearPost();
      console.log(description);
      toast.success('Post created successfully');
      setIsCreatePostOpen(false);
    }, 100);
  };

  return (
    <div
      className={`min-w-screen min-h-screen w-full h-full fixed top-0 left-0 bg-black/50  z-[200] flex items-center justify-center transform  mobile-lg:px-[6rem] ${
        isCreatePostOpen ? ' scale-[100%] opacity-[100]' : ' scale-0 opacity-0'
      }`}>
      <Toaster />
      <div
        className={`block mobile-lg:rounded-lg min-h-screen min-w-screen mobile-lg:min-h-fit   mobile-lg:max-w-[64rem] w-full  transform duration-[300ms] bg-white overflow-x-hidden ${
          isCreatePostOpen
            ? ' scale-[100%] opacity-[100]'
            : ' scale-0 opacity-0'
        }`}>
        <div className="block mobile-lg:rounded-lg p-[1rem] bg-white mobile-lg:max-w-[64rem] w-full  max-h-screen overflow-y-auto ">
          <div className="h-full w-full lg:pt-[1.75rem] lg:px-[2.75rem] pb-[2rem] relative bg-white">
            {/* closing */}
            <div
              onClick={() => setIsCreatePostOpen(false)}
              className="bg-white shadow-button w-fit h-fit rounded-full p-3 absolute right-8 top-8 hidden lg:block cursor-pointer">
              <Image
                src={CrossLogo}
                alt="crosslogo"
                className="w-[1rem] h-[1rem]  "
              />
            </div>
            <div className="flex w-full  flex-wrap  gap-3 items-center  mb-[1.5rem] lg:mt-[1rem]">
              {/* Author */}
              <div className="flex justify-between items-center  w-full lg:w-fit p-[1.5rem] pb-4 lg:p-0  lg:mb-0 border-b lg:border-none">
                <div className="flex items-center">
                  <Image
                    onClick={() => setIsCreatePostOpen(false)}
                    src={CrossLogo}
                    alt="crosslogo"
                    className="w-[1rem] h-[1rem] cursor-pointer mr-[0.5rem] lg:hidden"
                  />
                  <div className="relative">
                    <div
                      onClick={() =>
                        setIsAuthorDropdownOpen(!isAuthorDropdownOpen)
                      }
                      className="lg:border border-gray-border hover:border-link transition-all duration-200 rounded-full flex items-center cursor-pointer px-3 py-[5px]">
                      <Image
                        width={32}
                        height={32}
                        src={author.imgUrl}
                        alt="ProfilePhoto"
                        className="rounded-full w-[1.5rem] h-[1.5rem] cursor-pointer mr-[0.5rem]"
                      />
                      <span className="text-gray-700  text-[0.875rem] leading-[150%] ">
                        {author.name}
                      </span>
                      <Image
                        src={DownArrow}
                        alt="downarrow"
                        className=" w-[0.75rem] ml-[0.5rem] "
                      />
                    </div>
                    {/* Author DropDown */}
                    {isAuthorDropdownOpen && (
                      <div className="bg-white flex flex-col  py-2 absolute top-[2.2rem] min-w-[13rem] rounded-lg z-[100]">
                        {authorList.map((author, i) => (
                          <div
                            onClick={() => [
                              setAuthor(author),
                              setIsAuthorDropdownOpen(false),
                            ]}
                            key={i * 99}
                            className="flex gap-3 items-center px-[0.4rem] py-1 w-full bg-white  hover:bg-[#f4f4f4] cursor-pointer ">
                            <Image
                              width={32}
                              height={32}
                              src={author.imgUrl}
                              alt="ProfilePhoto"
                              className="rounded-full h-8 w-8 p-1 cursor-pointer "
                            />
                            <span className="text-gray-700 text-[1.1rem] ">
                              {author.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={handelPost}
                  className="py-[8px] lg:hidden block w-fit  px-6 text-[0.875rem] rounded font-semibold bg-primary-button text-primary-text hover:bg-secondary-button hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer ">
                  Post
                </button>
              </div>
              {/* Community */}
              <div className="flex gap-3 px-[1.5rem] mt-2 lg:mt-0 lg:px-0 flex-wrap">
                <div className="flex items-center lg:gap-3">
                  <span className="text-[0.875rem] hidden lg:inline-block">
                    to
                  </span>
                  {/* Community */}
                  <div className="relative">
                    <div
                      onClick={() =>
                        setIsCommunityDropdownOpen(!isCommunityDropdownOpen)
                      }
                      className="border border-gray-border hover:border-link transition-all duration-200 rounded-full flex items-center cursor-pointer px-3 py-[5px]">
                      <p
                        className={`text-[0.875rem]  ${
                          community == 'Select community'
                            ? 'text-gray-text'
                            : 'text-primary-text'
                        }`}>
                        {community}
                      </p>
                      <Image
                        src={DownArrow}
                        alt="DownArrow"
                        className=" w-[0.75rem] ml-[0.5rem]"
                      />
                    </div>
                    {/* Community DropDown */}
                    {isCommunityDropdownOpen && (
                      <div className="bg-white flex flex-col shadow-button  py-1 absolute top-[2.2rem] w-[14rem] max-h-[15rem]  z-[100] rounded-lg  ">
                        {communityList.map((community, i) => (
                          <p
                            onClick={() => [
                              setCommunity(community),
                              setIsCommunityDropdownOpen(false),
                            ]}
                            key={i * 89}
                            className="cursor-pointer px-4 py-2 text-[0.875rem] hover:bg-[#f4f4f4]">
                            {community}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[0.875rem]">in</span>
                  {/* Community */}
                  <div className="relative">
                    <div
                      onClick={() =>
                        setIsCommunityDropdownOpen2(!isCommunityDropdownOpen2)
                      }
                      className="border border-gray-border hover:border-link transition-all duration-200 rounded-full flex items-center cursor-pointer px-3 py-[5px]">
                      <p
                        className={`text-[0.875rem]  ${
                          community2 == 'Select topic'
                            ? 'text-gray-text'
                            : 'text-primary-text'
                        }`}>
                        {community2}
                      </p>
                      <Image
                        src={DownArrow}
                        alt="DownArrow"
                        className=" w-[0.75rem] ml-[0.5rem]"
                      />
                    </div>
                    {/* Community DropDown */}
                    {isCommunityDropdownOpen2 && (
                      <div className="bg-white flex flex-col shadow-button  py-1 absolute top-[2.2rem] w-[8rem] max-h-[15rem]  z-[100] rounded-lg  ">
                        {communityList2.map((community, i) => (
                          <p
                            onClick={() => [
                              setCommunity2(community),
                              setIsCommunityDropdownOpen2(false),
                            ]}
                            key={i * 89}
                            className="cursor-pointer px-4 py-2 text-[0.875rem] hover:bg-[#f4f4f4]">
                            {community}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-[0.5rem] w-full rounded-md px-[1.5rem] lg:px-0">
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Create a title"
                className=" text-[1.125rem] rounded-lg text-primary-text placeholder:text-secondary-text focus:outline-none  w-full"
              />
            </div>

            {/* Body */}
            <div className="w-full h-full pt-2 lg:pt-[10px] pb-[20px] px-[1.5rem] lg:px-0">
              <Tiptap setDescription={setDescription} handelPost={handelPost} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
