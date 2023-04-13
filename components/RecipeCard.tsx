import { useRouter } from 'next/navigation';

import { RecipeCardProps } from '@/common/types';

export default function RecipeCard({ title, publisher, image_url, recipe_id }: RecipeCardProps) {
  const router = useRouter();

  return (
    <li
      className='flex flex-row items-center p-4 cursor-pointer transition-all duration-200 ease-in hover:-translate-y-1 hover:bg-pale-orange'
      onClick={() => router.push(`/${recipe_id}`)}>
      <img
        src={image_url}
        alt='recipe'
        className='w-[50px] h-[50px] rounded-full object-cover md:w-[60px] md:h-[60px]'
      />
      <div className='flex flex-col gap-2 ml-4 min-w-0'>
        <h2 className='uppercase text-[13px] font-semibold text-pink-orange truncate lg:text-[15px]'>
          {title}
        </h2>
        <h3 className='uppercase text-[10px] font-semibold text-black/60 lg:text-[12px]'>
          {publisher}
        </h3>
      </div>
    </li>
  );
}
