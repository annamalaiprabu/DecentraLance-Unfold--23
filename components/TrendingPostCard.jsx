import React from 'react';
import Image from 'next/image';
import TimeAgo from 'react-timeago';
import OutlineHeart from '@/assets/OutlineHeart.svg';
import OutlineMessage from '@/assets/OutlineMessage.svg';
import OutlineBell from '@/assets/OutlineBell.svg';
import RedHeart from '@/assets/RedHeart.svg';
import YellowBell from '@/assets/YellowBell.svg';
import { postsActions } from '@/store/posts-slice';
import { useDispatch } from 'react-redux';

const TrendingPostCard = ({
  id,
  title,
  name,
  community,
  createAt,
  no_views,
  imgUrl,
  isLiked,
  no_likes,
  no_comments,
  hasFollowed,
}) => {
  const dispatch = useDispatch();
  const handelLike = () => {
    dispatch(postsActions.toggleLike(id));
  };

  const handelFollow = () => {
    dispatch(postsActions.toggleFollow(id));
  };

  return (
    <div className=" pb-[1rem]  px-[1.5rem] pt-[1rem] last:mx-0 bg-white hover:bg-primary cursor-pointer  border-b last:border-0 flex flex-col ">
      <div className=" ">
        <div className="flex gap-[10px] mb-1 ">
          <div className="flex flex-shrink-0 w-[1.5rem] h-[1.5rem] ">
            <Image
              src={imgUrl}
              width={32}
              height={32}
              alt="ProfilePhoto"
              className="w-[1.5rem] h-[1.5rem] rounded-full"
            />
          </div>

          <div className=" w-full">
            <div className="w-full mb-[0.125rem] leading-[0%] text-ellipsis">
              <sapn className="text-[0.75rem] font-semibold text-primary-text hover:underline underline-primary-text leading-[130%] mr-1 flex-shrink-0 ">
                {name}
              </sapn>
              <span className="text-[0.75rem] mr-1  flex-shrink-0 ">in</span>
              <span className="text-[0.75rem] font-semibold text-primary-text hover:underline underline-primary-text leading-[130%]  break-words">
                {community}
              </span>
            </div>

            <div className="flex gap-1">
              <div className="flex text-sm space-x-[0.3rem] items-center ">
                <p className="flex">
                  <TimeAgo
                    date={createAt}
                    className=" text-secondary-text text-[0.75rem] font-normal leading-[130%]"
                  />
                </p>
                <div className=" bg-primary-text w-[2px] h-[2px] rounded-full"></div>
                <p className="flex text-secondary-text text-[0.75rem] font-normal leading-[130%]">
                  <span className="mr-[2px]">{no_views}</span> views
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[0.875rem] mb-1 font-semibold leading-[130%]">
            {title}
          </p>

          <div className="flex mt-2 items-center">
            <div
              onClick={handelLike}
              className="p-[0.1875rem] mr-2 flex hover:scale-110 transition-all duration-100 ease-in-out-expo">
              <Image
                src={isLiked ? RedHeart : OutlineHeart}
                alt="OutlineHeart"
                className=" w-[14px] h-[1rem] cursor-pointer"
              />
              {no_likes > 0 && (
                <span className="text-secondary-text ml-1 text-[0.75rem] font-normal leading-[130%]">
                  {no_likes}
                </span>
              )}
            </div>
            <div className=" bg-primary-text w-[2px] h-[2px] rounded-full mr-2"></div>
            <div className="p-[0.1875rem] mr-2 flex hover:scale-110 transition-all duration-100 ease-in-out-expo">
              <Image
                src={OutlineMessage}
                alt="OutlineMessage"
                className="w-[14px] h-[1rem] cursor-pointer  "
              />
              {no_comments > 0 && (
                <span className="text-secondary-text ml-1 text-[0.75rem] font-normal leading-[130%]">
                  {no_comments}
                </span>
              )}
            </div>
            <div className=" bg-primary-text w-[2px] h-[2px] rounded-full mr-2"></div>
            <div
              onClick={handelFollow}
              className="p-[0.1875rem] mr-2 flex items-center hover:scale-110 transition-all duration-100 ease-in-out-expo">
              <Image
                src={hasFollowed ? YellowBell : OutlineBell}
                alt="OutlineBell"
                className="w-[14px] h-[1rem] cursor-pointer"
              />
              <span className="text-secondary-text ml-1 text-[0.75rem] font-normal leading-[130%]">
                {hasFollowed ? 'Following' : 'Follow'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingPostCard;
