'use client';

import Loader from '../Loader/Loader';
import css from './CampersLoader.module.css';

export default function CampersLoader() {
  return (
    <div className={css.container}>
      <div className={css.loaderWrapper}>
        <Loader />
      </div>

      <div className={css.textWrapper}>
        <h2 className={css.loadingHeading}>Loading tracks...</h2>
        <p className={css.loadingText}>
          Please wait while we fetch the best
          <br /> travel trucks for you
        </p>
      </div>
    </div>
  );
}
