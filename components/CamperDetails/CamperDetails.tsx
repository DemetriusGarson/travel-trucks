'use client';

import { useParams } from 'next/navigation';
import css from './CamperDetails.module.css';
import { useQuery } from '@tanstack/react-query';
import { getCamperById } from '@/lib/api/api';
import CamperSwiper from '../CamperSwiper/CamperSwiper';
import CamperCard from '../CamperCard/CamperCard';

export default function CamperDetails() {
  const { camperId } = useParams<{ camperId: string }>();
  const { data: camper } = useQuery({
    queryKey: ['camper', camperId],
    queryFn: () => getCamperById(camperId),
  });
  console.log(camper);
  return (
    <>
      {camper && (
        <>
          <div className={css.camperDetailsContainer}>
            <section className={css.infoSection}>
              <div className={css.infoSectionImageWrapper}>
                <CamperSwiper gallery={camper.gallery} />
              </div>
              <div className={css.infoSectionTextWrapper}>
                <CamperCard camper={camper} />
              </div>
            </section>
            <section className={css.reviewsSection}>
              camperDetailsReviewsSection
            </section>
          </div>
        </>
      )}
    </>
  );
}
