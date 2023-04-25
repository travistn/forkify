'use client';

import { useParams } from 'next/navigation';
import useSWR from 'swr';

import { fetcher } from '@/utils/fetcher';

function RecipeIdPage() {
  const params = useParams();

  const { data } = useSWR(`https://forkify-api.herokuapp.com/api/get?rId=${params.id}`, fetcher);

  return <div></div>;
}

export default RecipeIdPage;
