import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider as DefaultThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme';

const ThemeProvider = ({ children }: any) => {
  const { isDark } = useSelector((state: any) => state.theme);
  return (
    <DefaultThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </DefaultThemeProvider>
  );
};

export default ThemeProvider;
