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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${googleSans.variable}`}>
      <body className="flex flex-col min-h-screen bg-zinc-950">
        <SearchProvider>
          <Navbar />
          <SearchModalWrapper />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <MobileMenu />
        </SearchProvider>
        <Footer />
      </body>
    </html>
  );
}