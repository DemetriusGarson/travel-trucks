import Link from 'next/link';
import css from './NotFound.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'This page not found',
  openGraph: {
    title: 'Page not found',
    description: 'This page not found',
  },
};

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
