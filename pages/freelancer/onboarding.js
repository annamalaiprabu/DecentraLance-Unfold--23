import Authorization from '@/components/Resume';
import Education from '@/components/Experience';
import Resume from '@/components/SocialLinks';
import React, { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import BackLogo from '@/assets/LeftGrayArrow.svg';
import Image from 'next/image';
import RightArrow from '@/assets/RightArrow.svg';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import BlackTick from '@/assets/BlackTick.svg';
import BlackDownArrow from '@/assets/BlackDownArrow.svg';
import ProfileDetails from '@/components/ProfileDetails';
import { profileActions } from '@/store/profile-slice';
import { useRouter } from 'next/router';

const Onboarding = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    // This effect runs only once after the component has mounted.
    setIsFirstRender(false);
  }, []);

  // Profile Details
  const [avatarUrl, setAvatarUrl] = useState('');
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [aboutMe, setAboutMe] = useState('');

  // Experience

  const [experiences, setExperiences] = useState([
    {
      id: 0,
      companyName: '',
      startDate: '',
      endDate: '',
    },
  ]);

  const updateCompanyName = (index, value) => {
    const newExperiences = [...experiences];
    newExperiences[index].companyName = value;
    setExperiences(newExperiences);
  };

  const updateStartDate = (index, value) => {
    const newExperiences = [...experiences];
    newExperiences[index].startDate = value;
    setExperiences(newExperiences);
  };

  const updateEndDate = (index, value) => {
    const newExperiences = [...experiences];
    newExperiences[index].endDate = value;
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: experiences.length,
        companyName: '',
        startDate: '',
        endDate: '',
      },
    ]);
  };

  const removeExperience = (index) => {
    const newExperience = [...experiences];
    newExperience.splice(index, 1);
    setExperiences(newExperience);
  };

  // Social Links
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [linkedInUrlError, setLinkedInUrlError] = useState(false);
  const [githubUrl, setGithubUrl] = useState('');
  const [githubUrlError, setGithubUrlError] = useState(false);
  const [twitterUrl, setTwitterUrl] = useState('');
  const [twitterUrlError, setTwitterUrlError] = useState(false);

  const [resumeUrl, setResumeUrl] = useState('');

  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextPanel = (e) => {
    e.preventDefault();

    if (index < 3) {
      setIndex(index + 1);
      targetRef.current.scrollLeft += 740;
      setDirection(1);
    }

    if (index == 3) {
      handleCompleteProfile();
    }
  };

  const prevPanel = (e) => {
    e.preventDefault();

    if (index > 0) {
      setIndex(index - 1);
      targetRef.current.scrollLeft -= 740;
      setDirection(-1);
    }
  };

  const handleScroll = (e) => {
    if (isMobile) {
      e.preventDefault();
    }
  };

  const handleCompleteProfile = () => {
    if (
      userName &&
      email &&
      linkedInUrl &&
      githubUrl &&
      twitterUrl &&
      resumeUrl &&
      experiences.length > 0 &&
      avatarUrl
    ) {
      setIsComplete(true);
      toast.success('Profile created successfully');
    } else {
      setIsComplete(false);
      toast.error('Please fill all the fields');
    }
  };

  useEffect(() => {
    if (isComplete && !isFirstRender) {
      dispatch(
        profileActions.setProfileData({
          avatarUrl,
          userName,
          email,
          phoneNumber,
          aboutMe,
          experiences,
          linkedInUrl,
          githubUrl,
          twitterUrl,
          resumeUrl,
        })
      );
      console.log('profileData', {
        avatarUrl,
        userName,
        email,
        phoneNumber,
        aboutMe,
        experiences,
        linkedInUrl,
        githubUrl,
        twitterUrl,
        resumeUrl,
      });

      router.push('/freelancer/');
    } else {
      !isFirstRender && toast.error('Please fill all the fields');
    }
  }, [isComplete]);

  return (
    <div className="w-full  lg:pt-[2.75rem] lg:pb-[4rem] ">
      {/* Mobile nav bar */}
      <div className="h-[60px] lg:hidden px-4 w-full  shadow-nav sticky top-0 left-0 z-[50] flex items-center justify-between mb-2">
        <div className="flex-1 flex justify-start">
          <Image
            onClick={prevPanel}
            src={BlackDownArrow}
            alt="back"
            className={`h-[1.5rem] w-fit rotate-90 cursor-pointer transition-all duration-300 ${
              index > 0 ? 'block opacity-[100%]' : 'hidden opacity-0'
            }`}
          />
        </div>
        <div className="flex gap-1 flex-1 justify-center">
          <div
            className={`w-4 h-[3px] rounded-full   ${
              index > 0 ? 'bg-black' : 'bg-light-gray'
            }`}></div>
          <div
            className={`w-4 h-[3px] rounded-full   ${
              index > 1 ? 'bg-black' : 'bg-light-gray'
            }`}></div>
          <div
            className={`w-4 h-[3px] rounded-full   ${
              index > 2 ? 'bg-black' : 'bg-light-gray'
            }`}></div>
          <div
            className={`w-4 h-[3px] rounded-full   ${
              index > 3 ? 'bg-black' : 'bg-light-gray'
            }`}></div>
        </div>
        <div className="flex-1  flex justify-end">
          <button
            onClick={nextPanel}
            className="py-[10px] w-fit  px-8 text-[0.875rem] rounded font-semibold bg-primary-button text-primary-text hover:bg-secondary-button hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer">
            Next
          </button>
        </div>
      </div>
      <Toaster />
      <div
        className="max-w-[62.5rem]  bg-white py-[2.75rem] shadow-onboard overflowx-x-hidden mx-auto relative rounded-[1.5rem]"
        onScroll={handleScroll}>
        <div
          ref={targetRef}
          className="max-w-[52.125rem] w-full mx-auto overflow-x-clip scrollbar-hide ">
          {/* Back button */}
          <div className="hidden lg:block">
            <div
              onClick={prevPanel}
              className={`absolute ${
                index > 0 ? 'block' : 'hidden'
              } top-[3rem] left-[3rem] cursor-pointer`}>
              <Image
                src={BackLogo}
                alt="back"
                className="w-[0.625rem] h-[1rem]"
              />
            </div>
            {/* Header */}
            <div className="w-full flex justify-between">
              <span
                className={`text-[0.75rem] leading-[150%] transition-all duration-300  text-primary-text ${
                  index == 0 && 'font-semibold'
                }`}>
                Profile
              </span>
              <span
                className={`text-[0.75rem] leading-[150%] transition-all duration-300  text-primary-text ${
                  index == 1 && 'font-semibold'
                }`}>
                Experience
              </span>
              <span
                className={`text-[0.75rem] leading-[150%] transition-all duration-300  text-primary-text ${
                  index == 2 && 'font-semibold'
                }`}>
                Social Links
              </span>
              <span
                className={`text-[0.75rem] leading-[150%] transition-all duration-300 text-primary-text ${
                  index == 3 && 'font-semibold'
                }`}>
                Resume
              </span>
            </div>
            <hr className=" w-full bg-gray-hover h-[1px] mt-[1.5rem] mb-[2.25rem] mx-auto" />
          </div>

          {/* Slides */}
          <AnimatePresence initial={false} custom={index} mode={`wait`}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 300 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}>
              {index === 0 && (
                <ProfileDetails
                  avatarUrl={avatarUrl}
                  setAvatarUrl={setAvatarUrl}
                  userName={userName}
                  setUserName={setUserName}
                  userNameError={userNameError}
                  setUserNameError={setUserNameError}
                  emailError={emailError}
                  setEmailError={setEmailError}
                  email={email}
                  setEmail={setEmail}
                  aboutMe={aboutMe}
                  setAboutMe={setAboutMe}
                  phoneNumber={phoneNumber}
                  setPhoneNumber={setPhoneNumber}
                />
              )}
              {index === 1 && (
                <Education
                  experiences={experiences}
                  updateCompanyName={updateCompanyName}
                  updateStartDate={updateStartDate}
                  updateEndDate={updateEndDate}
                  addExperience={addExperience}
                  removeExperience={removeExperience}
                />
              )}
              {index === 2 && (
                <Resume
                  linkedInUrl={linkedInUrl}
                  setLinkedInUrl={setLinkedInUrl}
                  linkedInUrlError={linkedInUrlError}
                  setLinkedInUrlError={setLinkedInUrlError}
                  githubUrl={githubUrl}
                  setGithubUrl={setGithubUrl}
                  githubUrlError={githubUrlError}
                  setGithubUrlError={setGithubUrlError}
                  twitterUrl={twitterUrl}
                  setTwitterUrl={setTwitterUrl}
                  twitterUrlError={twitterUrlError}
                  setTwitterUrlError={setTwitterUrlError}
                />
              )}
              {index === 3 && (
                <Authorization
                  resumeUrl={resumeUrl}
                  setResumeUrl={setResumeUrl}
                />
              )}
            </motion.div>
          </AnimatePresence>
          <div className="hidden w-full mt-[2rem] lg:flex justify-center">
            <button
              onClick={nextPanel}
              className="max-w-[13.25rem]   mx-auto  bg-primary-button px-4 rounded font-semibold text-[0.875rem] h-[2.5rem] flex items-center gap-2 hover:bg-secondary-button hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer">
              {index == 3 ? 'Complete Profile' : 'Save and Continue'}
              <Image
                src={index == 3 ? BlackTick : RightArrow}
                alt="back"
                className="h-[0.875rem] w-fit"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
