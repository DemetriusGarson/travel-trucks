'use client';

import { useParams } from 'next/navigation';
import css from './CamperReviewsList.module.css';
import { useQuery } from '@tanstack/react-query';
import { getCamperByIdReviews } from '@/lib/api/api';
import StarList from '../StarList/StarList';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function CamperReviewList() {
  const { camperId } = useParams<{ camperId: string }>();
  const {
    data: reviews,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['reviews', camperId],
    queryFn: () => getCamperByIdReviews(camperId),
    refetchOnMount: false,
  });

  return (
    <div className={css.reviewsListWrapper}>
      {isLoading && (
        <div className={css.loaderWrapper}>
          <Loader />
        </div>
      )}
      {isError && <ErrorMessage />}
      {reviews && reviews.length > 0 && (
        <ul className={css.reviewsList}>
          {reviews.map(review => {
            return (
              <li key={review.id} className={css.reviewItem}>
                <div className={css.personWrapper}>
                  <div className={css.avatarContainer}>
                    <p className={css.avatarSymbol}>
                      {review.reviewer_name[0].toUpperCase()}
                    </p>
                  </div>
                  <div className={css.rateContainer}>
                    <h4 className={css.reviewerName}>{review.reviewer_name}</h4>
                    <StarList rating={review.reviewer_rating} />
                  </div>
                </div>
                <div className={css.commentTextWrapper}>
                  <p className={css.commentText}>{review.comment}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
