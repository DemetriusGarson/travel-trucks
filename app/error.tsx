'use client';
import css from './Error.module.css';

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <div className={css.notFoundWrapper}>
      <div className={css.textWrapper}>
        <h1>Some error</h1>
        <p>{error.message}</p>
        <button onClick={reset} className={css.tryAgainButton}>
          Try Again
        </button>
      </div>
    </div>
  );
}
