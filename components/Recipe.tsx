import { FaceSmileIcon } from '@heroicons/react/24/outline';

export default function Recipe() {
  return (
    <section className='w-full'>
      <h2 className='flex flex-row items-center gap-2 px-8 pt-12 text-[14px] text-[#615551] font-semibold md:px-[8rem] lg:text-[18px] lg:gap-4'>
        <FaceSmileIcon className='w-[40px] stroke-pink-orange stroke-2' />
        Start by searching for a recipe or an ingredient. Have fun!
      </h2>
    </section>
  );
}
