import store from '@/app/store';
import ThemeProvider from '@/features/themeToggle/ThemeProvider';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
