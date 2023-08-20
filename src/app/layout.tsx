import './globals.scss';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--roboto'
});

export const metadata: Metadata = {
  title: 'Jeyson Guzman',
  description: 'portafolio'
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en' className={roboto.className}>
      <head>
        <link rel='shortcut icon' href='/img/JR.svg' type='image/x-icon' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0' />
      </head>
      <body>{children}</body>
    </html>
  );
}
