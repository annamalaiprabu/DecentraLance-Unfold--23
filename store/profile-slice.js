import { createSlice } from '@reduxjs/toolkit';

const initialProfileState = {
  profileData: {},
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialProfileState,
  reducers: {
    setProfileData(state, action) {
      state.profileData = action.payload;
    },
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice;
