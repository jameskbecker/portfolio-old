import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import galleryReducer from '@/features/gallery/gallerySlice';
import themeReducer from '@/features/themeToggle/themeToggleSlice';

import sidebarReducer from '@/components/sidebar/sidebarSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      gallery: galleryReducer,
      theme: themeReducer,
      sidebar: sidebarReducer,
    },
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
