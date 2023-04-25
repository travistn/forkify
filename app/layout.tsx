import { Nunito_Sans } from 'next/font/google';

import './globals.css';
import RecipeBookHeader from '@/components/RecipeBookHeader';
import Recipes from '@/components/Recipes';

const nunitoSans = Nunito_Sans({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata = {
  title: 'Forkify',
  description: 'A recipe application developed by Travis Nguyen.',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={nunitoSans.className}>
      <body>
        <div className='bg-gradient-to-br from-[#fbdb89] to-[#f48982] xl:py-16 2xl:py-[5rem]'>
          <main className='w-full min-h-screen bg-pale-orange xl:rounded-md xl:w-[80%] xl:mx-auto 2xl:w-[64%]'>
            <RecipeBookHeader />
            <section className='w-full flex flex-col md:flex-row'>
              <Recipes />
              {children}
            </section>
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
