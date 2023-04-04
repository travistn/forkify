import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { PencilSquareIcon, BookmarkIcon } from '@heroicons/react/24/outline';

import logo from '../public/logo.png';

export default function RecipeBook() {
  return (
    <section className='w-full min-h-screen bg-pale-orange'>
      <header className='p-6 flex flex-row items-center justify-center gap-6 flex-wrap md:justify-between md:gap-4 md:flex-nowrap'>
        <Image src={logo} alt='logo' className='w-[112px]' />
        <form className='flex flex-row'>
          <input type='search' className='pl-8 py-2 rounded-[20px] border-none outline-none' />
          <button className='w-max flex flex-row items-center gap-2 bg-gradient-to-br from-[#fbdb89] to-[#f48982] px-8 py-2 rounded-[20px] text-white text-[12px] uppercase font-semibold -ml-[2rem]'>
            <MagnifyingGlassIcon className='w-[18px] stroke-white stroke-[0.4]' />
            Search
          </button>
        </form>
        <nav>
          <ul className='flex flex-row gap-6'>
            <li className='flex flex-row items-center gap-1 uppercase text-[12px] font-bold opacity-80'>
              <PencilSquareIcon className='w-[21px] stroke-pink-orange stroke-2' />
              Add Recipe
            </li>
            <li className='flex flex-row items-center gap-1 uppercase text-[12px] font-bold opacity-80'>
              <BookmarkIcon className='w-[20px] stroke-pink-orange stroke-2' />
              Bookmarks
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}
