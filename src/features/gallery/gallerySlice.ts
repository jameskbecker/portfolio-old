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

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    previousItem: (state) => {
      const { position, data } = state;
      const isFirst = position === 0;
      state.position = isFirst ? data.length - 1 : position - 1;
    },
    nextItem: (state) => {
      const { position, data } = state;
      const isLast = position === data.length - 1;
      state.position = isLast ? 0 : position + 1;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchGalleryData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    });
  },
});

export const { previousItem, nextItem } = gallerySlice.actions;
export default gallerySlice.reducer;
