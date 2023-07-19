import Link from 'next/link';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Been's Blog",
  description: 'Blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='p-10'>
        <header className='flex justify-between align-center'>
          <Link href='/'>Been's Blog</Link>
          <nav className='flex space-x-5'>
            <Link href='/'>home</Link>
            <Link href='/about'>about</Link>
            <Link href='/posts'>posts</Link>
            <Link href='/contact'>contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
