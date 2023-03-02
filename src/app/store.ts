import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import navigationReducer from '@/components/NavigationBar-/navigationSlice';
import galleryReducer from '@/features/gallery/gallerySlice';
import themeReducer from '@/features/themeToggle/themeToggleSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      gallery: galleryReducer,
      theme: themeReducer,
      navigation: navigationReducer,
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
