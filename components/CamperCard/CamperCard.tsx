'use client';
import { CamperById } from '@/types/camper';
import css from './CamperCard.module.css';

interface CamperCardProps {
  camper: CamperById;
}

export default function CamperCard({ camper }: CamperCardProps) {
  const infoItems = [
    {
      name: 'Form',
      value: camper.form[0].toUpperCase() + camper.form.slice(1),
    },
    {
      name: 'Length',

      value: `${camper.length.replace('m', ' m')}`,
    },
    {
      name: 'Width',
      value: camper.width.replace('m', ' m'),
    },
    {
      name: 'Height',
      value: camper.height.replace('m', ' m'),
    },
    {
      name: 'Tank',
      value: camper.tank.replace('kWh', ' kWh').replace('l', ' l'),
    },
    {
      name: 'Consumption',
      value: camper.consumption
        .replace('/', ' / ')
        .replace('kWh', ' kWh')
        .replace('l', ' l'),
    },
  ];

  return (
    <div className={css.camperCardContainer}>
      <div className={css.camperCardHeadingWrapper}>
        <div className={css.camperCardHeadingTitleWrapper}>
          <h3 className={css.camperTitle}>{camper.name}</h3>
          <div className={css.detailsContainer}>
            <div className={css.detailsWrapper}>
              <div className={css.reviewWrapper}>
                <svg className={css.iconStar} width={16} height={16}>
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
      <div className={css.camperCardVehicleDetailsContainer}>
        <div className={css.featuresContainer}>
          <h3 className={css.featuresTitle}>Vehicle details</h3>
          <div className={css.badgesContainer}>
            <ul className={css.badgesList}>
              {camper.amenities.map((amenity, index) => {
                return (
                  <li className={css.badgesItem} key={`${amenity}-${index}`}>
                    {amenity.length < 3
                      ? amenity.toUpperCase()
                      : amenity[0].toUpperCase() + amenity.slice(1)}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <span className={css.detailsLine}></span>
        <ul className={css.infoList}>
          {infoItems.map((infoItem, index) => {
            return (
              <li className={css.infoItem} key={`${infoItem.name}-${index}`}>
                <p className={css.infoItemName}>{infoItem.name}</p>
                <p className={css.infoItemValue}>{infoItem.value}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
