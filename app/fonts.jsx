import { Inter, Google_Sans } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const googleSans = Google_Sans({
  subsets: ['latin'],
  variable: '--font-google-sans',
  display: 'swap',
  weight: ['400', '500', '700'],
  
});
