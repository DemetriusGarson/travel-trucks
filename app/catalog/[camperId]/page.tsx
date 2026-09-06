import CamperDetails from '@/components/CamperDetails/CamperDetails';
import css from './CamperByIdPage.module.css';

import CamperReviewList from '@/components/CamperReviewsList/CamperReviewsList';
import BookingForm from '@/components/BookingForm/BookingForm';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getCamperById, getCamperByIdReviews } from '@/lib/api/api';
import { notFound } from 'next/navigation';
import axios from 'axios';

type CamperByIdPageProps = {
  params: Promise<{ camperId: string }>;
};

export default async function CamperByIdPage({ params }: CamperByIdPageProps) {
  const { camperId } = await params;

  const queryClient = new QueryClient();

  try {
    await queryClient.fetchQuery({
      queryKey: ['camper', camperId],
      queryFn: () => getCamperById(camperId),
    });

    await queryClient.fetchQuery({
      queryKey: ['reviews', camperId],
      queryFn: () => getCamperByIdReviews(camperId),
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      notFound();
    }
    throw error;
  }

  return (
    <div className={css.container}>
      <main className={css.main}>
        <div className={css.pageWrapper}>
          <h1 className={css.pageHeading}>Camper Details</h1>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <CamperDetails />
            <div className={css.reviewWrapper}>
              <h2 className={css.reviewHeading}>Reviews</h2>
              <div className={css.reviewBlocksContainer}>
                <CamperReviewList />
                <BookingForm />
              </div>
            </div>
          </HydrationBoundary>
        </div>
      </main>
    </div>
  );
}
