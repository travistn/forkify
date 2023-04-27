'use client';

import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { ClockIcon, UsersIcon } from '@heroicons/react/24/outline';

import { fetcher } from '@/utils/fetcher';

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
    </section>
  );
}

export default RecipeIdPage;
