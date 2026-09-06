import Link from 'next/link';
import css from './NotFoundCamper.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Camper not found',
  description: 'This camper not found',
  openGraph: {
    title: 'Camper not found',
    description: 'This camper not found',
  },
};

export default function NotFoundCamper() {
  return (
    <section className={css.notFoundWrapper}>
      <div className={css.textWrapper}>
        <h1>Camper not found</h1>
        <Link
          href="/catalog"
          className={css.catalogButton}
          aria-label="Open catalog page"
        >
          Catalog
        </Link>
      </div>
    </section>
  );
}
