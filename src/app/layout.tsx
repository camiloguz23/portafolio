import { UiHeader } from '@/components';
import './globals.scss';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { StoreProvider } from '@/provider';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--roboto'
});

export const metadata: Metadata = {
  title: 'Jeyson Guzman',
  description: 'portafolio',
  openGraph: {
    title: 'Jeyson Guzmán | Desarrollador Frontend',
    description:
      'Desarrollador Frontend con experiencia en React, Angular y aprendiendo sobre Next JS, enfocado en la calidad del código y dedicado al aprendizaje continuo.',
    url: 'https://jeyson-guzman.vercel.app/',
    siteName: 'Jeyson Guzmán',
    images: [
      {
        url: 'https://jeyson-guzman.vercel.app/images/jeyson.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'es_ES',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en' className={roboto.className}>
      <head>
        <link rel='shortcut icon' href='/img/JR.svg' type='image/x-icon' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0' />
      </head>
      <body>
        <StoreProvider>
          <UiHeader />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
