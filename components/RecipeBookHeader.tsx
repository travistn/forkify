'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { PencilSquareIcon, BookmarkIcon } from '@heroicons/react/24/outline';

import logo from '../public/logo.png';
import { useWindowWide } from '@/hooks/useWindowWide';
import useStore from '@/store';

function RecipeBookHeader() {
  const router = useRouter();
  const wide = useWindowWide(768);
  const [search, setSearch] = useState('');

  const enterSearch = useStore((state) => state.enterSearch);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSearch('');
  };

  return (
    <header className='p-6 flex flex-row items-center justify-center gap-6 flex-wrap md:justify-between md:gap-4 md:flex-nowrap lg:px-8'>
      <Image
        src={logo}
        alt='logo'
        className='w-[112px] lg:w-[140px] hover:cursor-pointer'
        onClick={() => router.push('/')}
      />
      <form
        className='flex flex-row transition-all duration-300 focus-within:-translate-y-1'
        onSubmit={handleSubmit}>
        <input
          type='search'
          placeholder={wide > 768 ? 'Search over 1,000,000 recipes...' : ''}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className='pl-8 py-2 rounded-full border-none outline-none text-[14px] text-black/80 md:py-3 lg:text-[16px] lg:w-[350px] 2xl:w-[375px]'
        />
        <button
          type='submit'
          onClick={() => enterSearch(search)}
          className='w-max flex flex-row items-center gap-2 bg-gradient-to-br from-[#fbdb89] to-[#f48982] px-8 py-2 rounded-full text-white text-[12px] uppercase font-semibold -ml-[2rem] transition-all duration-200 ease-in lg:text-[15px] hover:scale-105'>
          <MagnifyingGlassIcon className='w-[18px] stroke-white stroke-[0.4] lg:w-[20px]' />
          Search
        </button>
      </form>
      <nav>
        <ul className='flex flex-row gap-6'>
          <li className='flex flex-row items-center gap-1 uppercase text-[12px] font-semibold text-[#615551] lg:text-[14px] hover:cursor-pointer'>
            <PencilSquareIcon className='w-[21px] stroke-pink-orange stroke-2 lg:w-[24px]' />
            Add Recipe
          </li>
          <li className='flex flex-row items-center gap-1 uppercase text-[12px] font-semibold text-[#615551] lg:text-[14px] hover:cursor-pointer'>
            <BookmarkIcon className='w-[20px] stroke-pink-orange stroke-2 lg:w-[24px]' />
            Bookmarks
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default RecipeBookHeader;
