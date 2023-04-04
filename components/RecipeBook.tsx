import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

import logo from '../public/logo.png';

export default function RecipeBook() {
  return (
    <section className='w-full min-h-screen bg-pale-orange'>
      <header className='p-6 flex flex-row items-center gap-4'>
        <Image src={logo} alt='logo' className='w-[112px]' />
        <form className='flex flex-row'>
          <input type='search' className='pl-8 py-2 rounded-[20px] border-none outline-none' />
          <button className='w-max flex flex-row items-center gap-2 bg-gradient-to-br from-[#fbdb89] to-[#f48982] px-8 py-2 rounded-[20px] text-white text-[12px] uppercase font-semibold -ml-[2rem]'>
            <MagnifyingGlassIcon className='w-[18px] stroke-white stroke-[0.4]' />
            Search
          </button>
        </form>
      </header>
    </section>
  );
}
