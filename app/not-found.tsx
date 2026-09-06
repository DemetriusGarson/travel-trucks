import Link from 'next/link';
import css from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={css.notFoundWrapper}>
      <div className={css.textWrapper}>
        <h1>Page not found</h1>
        <Link href="/" className={css.homeButton} aria-label="Open home page">
          Home
        </Link>
      </div>
    </div>
  );
}
