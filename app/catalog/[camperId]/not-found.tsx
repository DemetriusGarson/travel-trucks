import Link from 'next/link';
import css from './NotFoundCamper.module.css';

export default function NotFoundCamper() {
  return (
    <div className={css.notFoundWrapper}>
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
    </div>
  );
}
