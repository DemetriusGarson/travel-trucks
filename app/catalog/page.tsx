import FilterForm from '@/components/FilterForm/FilterForm';
import css from './Catalog.module.css';
import CampersList from '@/components/CampersList/CampersList';

export default function Catalog() {
  return (
    <div className={css.container}>
      <main className={css.main}>
        <section className={css.section}>
          {/* <div className={css.sidebar}>Sidebar</div> */}
          <FilterForm />
          <CampersList />
        </section>
      </main>
    </div>
  );
}
