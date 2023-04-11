import { useState } from 'react';
import useSWR from 'swr';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Pagination from 'rc-pagination';

import RecipeCard from './RecipeCard';
import { fetcher } from '@/utils/fetcher';
import { RecipeCardProps } from '@/common/types';

export default function Recipes() {
  const [current, setCurrent] = useState(1);
  const [perPage] = useState(10);
  const [size, setSize] = useState(perPage);

  const { data } = useSWR('https://forkify-api.herokuapp.com/api/search?q=pie', fetcher);

  const getRecipes = (current: number, pageSize: number) => {
    return data?.recipes.slice((current - 1) * pageSize, current * pageSize);
  };

  const PerPageChange = (value: number) => {
    setSize(value);
    const newPerPage = Math.ceil(data?.recipes.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const onPageChange = (page: number, pageSize: number) => {
    setCurrent(page);
    setSize(pageSize);
  };

  return (
    <section className='bg-white w-full md:w-[34%] xl:rounded-bl-md'>
      <ul className='flex flex-col md:mt-6'>
        {getRecipes(current, size)?.map((recipe: RecipeCardProps, index: number) => (
          <RecipeCard
            title={recipe?.title}
            publisher={recipe?.publisher}
            image_url={recipe?.image_url}
            key={index}
          />
        ))}
      </ul>
      <div className='p-4 flex flex-row justify-center'>
        <Pagination
          className='flex flex-row items-center gap-8 select-none text-[14px] text-pink-orange font-bold lg:text-[16px] hover:cursor-pointer'
          total={data?.recipes.length}
          pageSize={size}
          onShowSizeChange={PerPageChange}
          prevIcon={
            <ArrowLeftIcon className='w-[14px] fill-pink-orange stroke-pink-orange lg:w-[16px]' />
          }
          nextIcon={
            <ArrowRightIcon className='w-[14px] fill-pink-orange stroke-pink-orange lg:w-[16px]' />
          }
          current={current}
          onChange={onPageChange}
        />
      </div>
    </section>
  );
}
