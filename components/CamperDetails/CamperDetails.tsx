'use client';

import { useParams } from 'next/navigation';
import css from './CamperDetails.module.css';
import { useQuery } from '@tanstack/react-query';
import { getCamperById } from '@/lib/api/api';
import CamperSwiper from '../CamperSwiper/CamperSwiper';
import CamperCard from '../CamperCard/CamperCard';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

export default function CamperDetails() {
  const { camperId } = useParams<{ camperId: string }>();
  const {
    data: camper,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['camper', camperId],
    queryFn: () => getCamperById(camperId),
    refetchOnMount: false,
  });
  return (
    <>
      <div className={css.camperDetailsContainer}>
        {isError && <ErrorMessage />}
        {isLoading && (
          <div className={css.loaderWrapper}>
            <Loader />
          </div>
        )}
        {camper && (
          <section className={css.infoSection}>
            <div className={css.infoSectionImageWrapper}>
              <CamperSwiper gallery={camper.gallery} />
            </div>
            <div className={css.infoSectionTextWrapper}>
              <CamperCard camper={camper} />
            </div>
          </section>
        )}
      </div>
    </>
  );
}
