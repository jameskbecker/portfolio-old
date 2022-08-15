import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  isOpen: false,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = sidebarSlice.actions;
export default sidebarSlice.reducer;
