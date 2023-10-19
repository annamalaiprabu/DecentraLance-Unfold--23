import { createSlice } from '@reduxjs/toolkit';

const initialProfileState = {
  socialLinks: [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialProfileState,
  reducers: {},
});

export const profileActions = profileSlice.actions;

export default profileSlice;
