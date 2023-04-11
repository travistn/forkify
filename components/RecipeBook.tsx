'use client';

import RecipeBookHeader from './RecipeBookHeader';
import Recipes from './Recipes';
import Recipe from './Recipe';

export default function RecipeBook() {
  return (
    <main className='w-full min-h-screen bg-pale-orange xl:rounded-md xl:w-[80%] xl:mx-auto 2xl:w-[64%]'>
      <RecipeBookHeader />
      <section className='w-full flex flex-col md:flex-row'>
        <Recipes />
        <Recipe />
      </section>
    </main>
  );
}
