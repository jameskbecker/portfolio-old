import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  isOpen: false,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenu } = navigationSlice.actions;
export default navigationSlice.reducer;
