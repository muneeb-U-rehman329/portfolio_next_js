import { Poppins, Inter } from 'next/font/google';
import ClientWrapper from './clientWrapper';
import './globals.css';
import Preloader from '../Components/Preloader/Preloader';
import SmoothCursor from '../Components/CustomCursor/CustomCursor';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'M.R.C Portfolio',
  description: 'Portfolio created with Next.js + Chakra UI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <ClientWrapper>
          <SmoothCursor />
          <Preloader />
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
