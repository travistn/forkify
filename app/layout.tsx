import { Nunito_Sans } from 'next/font/google';

import './globals.css';

const nunitoSans = Nunito_Sans({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata = {
  title: 'Forkify',
  description: 'A recipe application developed by Travis Nguyen.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={nunitoSans.className}>
      <body>{children}</body>
    </html>
  );
}
