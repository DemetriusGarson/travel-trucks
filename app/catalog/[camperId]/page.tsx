import CamperDetails from '@/components/CamperDetails/CamperDetails';
import css from './CamperByIdPage.module.css';

import CamperReviewList from '@/components/CamperReviewsList/CamperReviewsList';
import BookingForm from '@/components/BookingForm/BookingForm';

type CamperByIdPageProps = {
  params: Promise<{ camperId: string }>;
};

export default async function CamperByIdPage({ params }: CamperByIdPageProps) {
  const { camperId } = await params;
  console.log(camperId);
  return (
    <div className={css.container}>
      <main className={css.main}>
        <div className={css.pageWrapper}>
          <h1 className={css.pageHeading}>Camper Details</h1>
          <CamperDetails />
          <div className={css.reviewWrapper}>
            <h2 className={css.reviewHeading}>Reviews</h2>
            <div className={css.reviewBlocksContainer}>
              <CamperReviewList />
              <BookingForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
