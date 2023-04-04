import Image from 'next/image';

import logo from '../public/logo.png';

export default function RecipeBook() {
  return (
    <section className='w-full min-h-screen bg-pale-orange'>
      <header className='px-6 py-4'>
        <Image src={logo} alt='logo' className='w-[120px]' />
      </header>
    </section>
  );
}
