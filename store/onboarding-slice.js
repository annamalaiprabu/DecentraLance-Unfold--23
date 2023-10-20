import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  avatarUrl: '',
  phoneNumber: '',
  email: '',
  description: '',
  linkedInUrl: '',
  githubUrl: '',
  twitterUrl: '',
  resumeUrl: '',
  experence: [],
  usernameError: true,
  avatarUrlError: true,
  phoneNumberError: true,
  emailError: true,
  descriptionError: true,
  linkedInUrlError: true,
  githubUrlError: true,
  twitterUrlError: true,
  resumeUrlError: true,
  experenceError: true,
  educationError: true,
  skillsError: true,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },

    setAvatarUrl(state, action) {
      state.avatarUrl = action.payload;
    },

    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setLinkedInUrl(state, action) {
      state.linkedInUrl = action.payload;
    },
    setGithubUrl(state, action) {
      state.githubUrl = action.payload;
    },
    setTwitterUrl(state, action) {
      state.twitterUrl = action.payload;
    },
    setResumeUrl(state, action) {
      state.resumeUrl = action.payload;
    },
    setExperience(state, action) {
      state.experence = action.payload;
    },
    setEducation(state, action) {
      state.education = action.payload;
    },
    setSkills(state, action) {
      state.skills = action.payload;
    },

    setUsernameError(state, action) {
      state.usernameError = action.payload;
    },

    setEmailError(state, action) {
      state.emailError = action.payload;
    },
  },
});

export const onboardingActions = onboardingSlice.actions;

export default onboardingSlice;
