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

export default async function Catalog() {
  const initialFilters: FiltersData = {
    location: '',
    form: null,
    transmission: null,
    engine: null,
  };

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['filters'],
    queryFn: getFilters,
  });

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['campers', initialFilters],
    queryFn: ({ pageParam }) =>
      getCampers({
        filters: initialFilters,
        page: pageParam,
        perPage: 4,
      }),
    initialPageParam: 1,
  });

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
