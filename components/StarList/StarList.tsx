import css from './StarList.module.css';

interface StarListProps {
  rating: number;
}

export default function StarList({ rating }: StarListProps) {
  const starArray = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      className={index < rating ? css.iconStarRated : css.iconStar}
      width={16}
      height={16}
    >
      <use href="/sprite.svg#icon-star" />
    </svg>
  ));

  return (
    <ul className={css.starList}>
      {starArray.map((star, index) => {
        return (
          <li key={index} className={css.starItem}>
            {star}
          </li>
        );
      })}
    </ul>
  );
}
