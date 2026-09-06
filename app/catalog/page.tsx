import FilterForm from '@/components/FilterForm/FilterForm';
import css from './Catalog.module.css';
import CampersList from '@/components/CampersList/CampersList';
import { getCampers, getFilters } from '@/lib/api/api';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { FiltersData } from '@/types/filters';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Trucks Catalog',
  description: 'Choose your travel truck',
  openGraph: {
    title: 'Travel Trucks Catalog',
    description: 'Choose your travel truck',
    url: 'https://travel-trucks-delta-teal.vercel.app/catalog',
    type: 'article',
  },
};

export default async function Catalog() {
  const initialFilters: FiltersData = {
    location: '',
    form: null,
    transmission: null,
    engine: null,
  };

  const queryClient = new QueryClient();

  try {
    await queryClient.fetchQuery({
      queryKey: ['filters'],
      queryFn: getFilters,
    });

    await queryClient.fetchInfiniteQuery({
      queryKey: ['campers', initialFilters],
      queryFn: ({ pageParam }) =>
        getCampers({
          filters: initialFilters,
          page: pageParam,
          perPage: 4,
        }),
      initialPageParam: 1,
    });
  } catch (error) {
    throw error;
  }

  return (
    <div className={css.container}>
      <main className={css.main}>
        <section className={css.section}>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <FilterForm />
            <CampersList />
          </HydrationBoundary>
        </section>
      </main>
    </div>
  );
}
