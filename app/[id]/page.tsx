'use client';

import { useParams } from 'next/navigation';
import useSWR from 'swr';

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
      <section className='p-8'>
        <div className='flex flex-row gap-8'>
          <div>{data?.data.recipe.cooking_time}</div>
        </div>
      </section>
    </section>
  );
}

export default RecipeIdPage;
