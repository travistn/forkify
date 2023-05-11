'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import useSWR from 'swr';
import { ClockIcon, UsersIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import { CheckIcon, ArrowSmallRightIcon } from '@heroicons/react/24/solid';

import { fetcher } from '@/utils/fetcher';
import { RecipeIngredientsProps } from '@/common/types';
import useStore from '@/store';

function RecipeIdPage() {
  const params = useParams();

  const bookmarks = useStore((state) => state.bookmarks);
  const addBookmark = useStore((state) => state.addBookmark);

  const { data } = useSWR(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}?key=${process.env.NEXT_PUBLIC_FORKIFY_ENDPOINT}`,
    fetcher
  );

  return (
    <section className='w-full'>
      <figure className='bg-gradient-to-br from-[#fbdb89] to-[#f48982] relative w-full'>
        <img
          src={data?.data.recipe.image_url}
          className='w-full h-[200px] object-cover opacity-40 md:h-[260px] lg:h-[320px]'
        />
        <h1 className='absolute w-[50%] bottom-0 left-[50%] uppercase text-[26px] text-white text-center font-bold leading-[1.95] -skew-y-6 -translate-x-[50%] translate-y-[20%] lg:text-[32px]'>
          <span className='box-decoration-clone	bg-gradient-to-br from-[#fbdb89] to-[#f48982] px-[1.3rem] py-4'>
            {data?.data.recipe.title}
          </span>
        </h1>
      </figure>
      <section className='py-16'>
        <div className='flex flex-row justify-center gap-8'>
          <div className='flex flex-row items-center gap-1'>
            <ClockIcon className='w-[20px] stroke-pink-orange stroke-2 mr-1 lg:w-[26px]' />
            <span className='font-bold text-[#615551] text-[14px] lg:text-[18px]'>
              {data?.data.recipe.cooking_time}
            </span>
            <span className='uppercase text-[#615551] text-[14px] lg:text-[18px]'>Minutes</span>
          </div>
          <div className='flex flex-row items-center gap-1'>
            <UsersIcon className='w-[20px] stroke-pink-orange stroke-2 mr-1 lg:w-[26px]' />
            <span className='font-bold text-[#615551] text-[14px] lg:text-[18px]'>
              {data?.data.recipe.servings}
            </span>
            <span className='uppercase text-[#615551] text-[14px] lg:text-[18px]'>Servings</span>
          </div>
          <button className='p-2 rounded-full bg-gradient-to-br from-[#fbdb89] to-[#f48982] transition-all duration-200 hover:cursor-pointer hover:scale-110'>
            <BookmarkIcon
              className={`w-[18px] stroke-white stroke-2 lg:w-[24px] ${
                bookmarks?.some((recipe) => recipe.recipe.id === params.id) ? 'fill-white' : ''
              }`}
              onClick={() => addBookmark(data?.data.recipe)}
            />
          </button>
        </div>
      </section>
      <section className='flex flex-col items-center gap-4 px-[5rem] py-12 bg-[#f2efee] w-full'>
        <h2 className='uppercase text-[15px] font-bold text-pink-orange lg:text-[20px]'>
          Recipe Ingredients
        </h2>
        <ul className='grid grid-cols-2 gap-4 mt-2'>
          {data?.data.recipe.ingredients.map(
            (ingredient: RecipeIngredientsProps, index: number) => (
              <li key={index} className='flex flex-row items-start gap-2'>
                <CheckIcon className='w-[16px] fill-pink-orange lg:w-[20px]' />
                <span className='text-[14px] text-[#615551] lg:text-[16px]'>
                  {`${ingredient?.quantity !== null ? ingredient?.quantity : ''} ${
                    ingredient?.unit
                  } ${ingredient?.description} `}
                </span>
              </li>
            )
          )}
        </ul>
      </section>
      <section className='flex flex-col items-center gap-6 px-[5rem] py-12'>
        <h2 className='uppercase text-[15px] font-bold text-pink-orange lg:text-[20px]'>
          How to cook it
        </h2>
        <p className='text-[14px] text-[#918581] text-center lg:text-[17px]'>
          This recipe was carefully designed and tested by
          <span className='text-[#918581] font-bold'> {data?.data.recipe.publisher}</span>. Please
          check out directions at their website.
        </p>
        <Link
          href={`${data?.data.recipe.source_url}`}
          target='_blank'
          className='uppercase text-[12px] text-white bg-gradient-to-br from-[#fbdb89] to-[#f48982] rounded-[10rem] px-4 py-2 flex flex-row items-center gap-1 transition-all duration-200 ease-in lg:text-[14px] lg:px-6 lg:py-3 hover:cursor-pointer hover:scale-105'>
          Directions
          <ArrowSmallRightIcon className='w-[14px] stroke-white stroke-1 lg:w-[15px]' />
        </Link>
      </section>
    </section>
  );
}

export default RecipeIdPage;
