import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  position: 0,
  data: [],
  isLoading: true,
};

export const fetchGalleryData = createAsyncThunk(
  'gallery/fetchData',
  async () => {
    const response = await fetch('/api/portfolio');
    return await response.json();
  }
);

export const appearancePanelSlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    previousItem: (state) => {
      const { position, data } = state;
      state.position = position === 0 ? position - 1 : data.length - 1;
    },
    nextItem: (state) => {
      const { position, data } = state;
      state.position = position === data.length - 1 ? 0 : position + 1;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchGalleryData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    });
  },
});

export const { previousItem, nextItem } = appearancePanelSlice.actions;
export default appearancePanelSlice.reducer;
