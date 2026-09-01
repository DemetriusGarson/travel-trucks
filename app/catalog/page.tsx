import FilterForm from '@/components/FilterForm/FilterForm';
import css from './Catalog.module.css';

export default function Catalog() {
  return (
    <div className={css.container}>
      <main className={css.main}>
        <section className={css.section}>
          {/* <div className={css.sidebar}>Sidebar</div> */}
          <FilterForm />
          <div className={css.catalogWrapper}>
            <div className={css.catalogList}>CatalogList</div>
            <button type="button" className={css.loadMoreButton}>
              Load More
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
