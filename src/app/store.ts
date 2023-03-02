import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import galleryReducer from '@/components/Gallery/gallerySlice';
import navigationReducer from '@/components/NavigationBar/navigationSlice';
import themeReducer from '@/components/ThemeToggle/themeToggleSlice';

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
