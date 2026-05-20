import { inter, googleSans } from './fonts';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';
import SearchModalWrapper from '@/components/SearchModalWrapper';
import { SearchProvider } from '@/components/SearchProvider';

export const metadata = {
  title: "LXShort - ទស្សនារឿងថ្មីៗ",
  description: "ទស្សនារឿងថ្មី ល្បីៗ ជាមួយ LXShort",
  
}

export const viewport = {
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ff33ff' },  // Your Dark Mode background hex
    { media: '(prefers-color-scheme: dark)', color: '#ff33ff' },  // Your Dark Mode background hex
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${googleSans.variable}`}>
      <body className="flex flex-col min-h-dvh bg-(--primary)">
        <SearchProvider>
          <Navbar />
          <SearchModalWrapper />
          <main className="pb-20 md:pb-0">{children}</main>
          <MobileMenu />
        </SearchProvider>
        <Footer />
      </body>
    </html>
  );
}