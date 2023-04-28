'use client';

import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { ClockIcon, UsersIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/solid';

import { fetcher } from '@/utils/fetcher';
import { RecipeIngredientsProps } from '@/common/types';

function RecipeIdPage() {
  const params = useParams();

  const { data } = useSWR(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}?key=${process.env.NEXT_PUBLIC_FORKIFY_ENDPOINT}`,
    fetcher
  );

  return (
    <section className='w-full'>
      <figure className='bg-gradient-to-br from-[#fbdb89] to-[#f48982]'>
        <img
          src={data?.data.recipe.image_url}
          className='w-full h-[200px] object-cover opacity-40 md:h-[260px] lg:h-[320px]'
        />
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
        </div>
      </section>
      <section className='flex flex-col items-center gap-4 px-8 py-12 bg-[#f2efee] w-full'>
        <h2 className='uppercase text-[15px] font-bold text-pink-orange'>Recipe Ingredients</h2>
        <ul className='grid grid-cols-2 gap-4 mt-2'>
          {data?.data.recipe.ingredients.map(
            (ingredient: RecipeIngredientsProps, index: number) => (
              <li key={index} className='flex flex-row items-start gap-2'>
                <CheckIcon className='w-[16px] fill-pink-orange' />
                <span className='text-[13px] text-[#615551]'>
                  {`${ingredient?.quantity !== null ? ingredient?.quantity : ''} ${
                    ingredient?.unit
                  } ${ingredient?.description} `}
                </span>
              </li>
            )
          )}
        </ul>
      </section>
    </section>
  );
}

export default RecipeIdPage;
