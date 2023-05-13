'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { PencilSquareIcon, BookmarkIcon } from '@heroicons/react/24/outline';

import logo from '../public/logo.png';
import { useWindowWide } from '@/hooks/useWindowWide';
import useStore from '@/store';
import RecipeCard from './RecipeCard';

function RecipeBookHeader() {
  const router = useRouter();
  const wide = useWindowWide(768);
  const [search, setSearch] = useState('');

  const enterSearch = useStore((state) => state.enterSearch);
  const bookmarks = useStore((state) => state.bookmarks);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSearch('');
  };

  return (
    <header className='relative flex flex-row px-6 items-center justify-center gap-6 flex-wrap md:justify-between md:gap-4 md:flex-nowrap lg:px-8'>
      <figure className='h-[80px] lg:h-[100px] flex items-center'>
        <Image
          src={logo}
          alt='logo'
          className='w-[112px] lg:w-[140px] hover:cursor-pointer'
          onClick={() => router.push('/')}
        />
      </figure>
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
      <nav className='self-stretch'>
        <ul className='flex flex-row h-full'>
          <li className='flex flex-row items-center gap-1 uppercase text-[12px] font-semibold text-[#615551] px-4 lg:text-[14px] hover:cursor-pointer hover:bg-[#f2efee]'>
            <PencilSquareIcon className='w-[21px] stroke-pink-orange stroke-2 lg:w-[24px]' />
            Add Recipe
          </li>
          <li className='flex flex-row items-center gap-1 uppercase text-[12px] font-semibold text-[#615551] px-4 lg:text-[14px] hover:cursor-pointer group hover:bg-[#f2efee]'>
            <BookmarkIcon className='w-[20px] stroke-pink-orange stroke-2 lg:w-[24px]' />
            Bookmarks
            <div
              className={`hidden z-10 flex-col bg-white absolute right-0 w-[70%] top-[200px] md:top-[80px] md:w-[40%] lg:w-[35%] lg:top-[100px] group-hover:flex`}>
              {bookmarks.length === 0 ? (
                <p className='text-[14px] text-[#615551] font-semibold normal-case p-12 lg:text-[16px]'>
                  No bookmarkets yet. Find a nice recipe and bookmark it!
                </p>
              ) : (
                bookmarks.map((recipe, index: number) => (
                  <RecipeCard
                    key={index}
                    title={recipe.recipe.title}
                    publisher={recipe?.recipe.publisher}
                    image_url={recipe?.recipe.image_url}
                    id={recipe?.recipe.id}
                  />
                ))
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default RecipeBookHeader;
