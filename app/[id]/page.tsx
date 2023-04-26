'use client';

import { useParams } from 'next/navigation';
import useSWR from 'swr';

import { fetcher } from '@/utils/fetcher';

function RecipeIdPage() {
  const params = useParams();

  const { data } = useSWR(`https://forkify-api.herokuapp.com/api/get?rId=${params.id}`, fetcher);

  return (
    <section className='w-full'>
      <figure className='bg-gradient-to-br from-[#fbdb89] to-[#f48982]'>
        <img
          src={data?.recipe.image_url}
          className='w-full h-[200px] object-cover opacity-40 md:h-[260px] lg:h-[320px]'
        />
      </figure>
    </section>
  );
}

export default RecipeIdPage;
