'use client';
import { CamperById } from '@/types/camper';
import css from './CamperCard.module.css';

interface CamperCardProps {
  camper: CamperById;
}

export default function CamperCard({ camper }: CamperCardProps) {
  return (
    <div className={css.camperCardContainer}>
      <div className={css.camperCardHeadingWrapper}>
        <div className={css.camperCardHeadingTitleWrapper}>
          <h3 className={css.camperTitle}>{camper.name}</h3>
          <div className={css.detailsContainer}>
            <div className={css.detailsWrapper}>
              <div className={css.reviewWrapper}>
                <svg className={css.iconStar} width={20} height={20}>
                  <use href="/sprite.svg#icon-star" aria-hidden="true"></use>
                </svg>
                <p
                  className={css.camperRating}
                >{`${camper.rating}(${camper.totalReviews} Reviews)`}</p>
              </div>
              <div className={css.locationWrapper}>
                <svg className={css.iconMap} width={16} height={16}>
                  <use href="/sprite.svg#icon-map" aria-hidden="true"></use>
                </svg>
                <p className={css.camperLocation}>
                  {camper.location.split(', ').reverse().join(', ')}
                </p>
              </div>
            </div>
            <p className={css.camperPrice}>{`€${camper.price}`}</p>
          </div>
        </div>
        <p className={css.camperDescription}>{camper.description}</p>
      </div>
    </div>
  );
}
