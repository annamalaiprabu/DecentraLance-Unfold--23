import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './profile-slice';
import onboardingSlice from './onboarding-slice';

const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
    onboarding: onboardingSlice.reducer,
  },
});

export default store;
