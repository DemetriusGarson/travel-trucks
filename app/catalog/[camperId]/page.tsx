import CamperDetails from '@/components/CamperDetails/CamperDetails';
import css from './CamperByIdPage.module.css';

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
        </div>
      </main>
    </div>
  );
}
