import CamperDetails from '@/components/CamperDetails/CamperDetails';
import css from './CamperByIdPage.module.css';

import CamperReviewList from '@/components/CamperReviewsList/CamperReviewsList';

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
          <CamperDetails />
          <div className={css.reviewWrapper}>
            <h3 className={css.reviewHeading}>Reviews</h3>
            <div className={css.reviewBlocksContainer}>
              <CamperReviewList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
