import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import gallerySlice from '../features/gallery/gallerySlice';
import themeSlice from '../features/themeToggle/themeToggleSlice';

export function makeStore() {
  return configureStore({
    reducer: { gallery: gallerySlice, theme: themeSlice },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
