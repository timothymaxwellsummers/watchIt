import '@/styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from 'next/app'
import { StopWatchProvider } from '@/components/StopWatchContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StopWatchProvider>
      <Component {...pageProps} />
    </ StopWatchProvider>
  );
}
