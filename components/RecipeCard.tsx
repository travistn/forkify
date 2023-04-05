type RecipeCardProps = {
  recipe: {
    title: string;
    publisher: string;
    image_url: string;
  };
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <li className='flex flex-row items-center p-4 md:bg-pale-orange'>
      <img
        src={recipe?.image_url}
        alt='recipe'
        className='w-[50px] h-[50px] rounded-full object-cover md:w-[60px] md:h-[60px]'
      />
      <div className='flex flex-col gap-2 ml-4 min-w-0'>
        <h2 className='uppercase text-[13px] font-semibold text-pink-orange truncate md:text-[15px]'>
          {recipe?.title}
        </h2>
        <h3 className='uppercase text-[10px] font-semibold text-black/60 md:text-[12px]'>
          {recipe?.publisher}
        </h3>
      </div>
    </li>
  );
}
