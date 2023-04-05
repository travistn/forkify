'use client';

import RecipeBookHeader from './RecipeBookHeader';
import Recipes from './Recipes';

export default function RecipeBook() {
  return (
    <main className='w-full min-h-screen bg-pale-orange xl:rounded-md xl:w-[80%] xl:mx-auto 2xl:w-[64%]'>
      <RecipeBookHeader />
      <section className='w-full flex flex-row'>
        <Recipes />
      </section>
    </main>
  );
}
