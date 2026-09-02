import Image from 'next/image';
import css from './CampersNotFound.module.css';
import { useFiltersStore } from '@/lib/store/filtersStore';
import { FiltersData } from '@/types/filters';
import toast from 'react-hot-toast';

export default function CampersNotFound() {
  const filtersData = useFiltersStore(state => state.filters);
  const setFilters = useFiltersStore(state => state.setFilters);
  const clearFilters = useFiltersStore(state => state.clearFilters);

  function handleClearFilters() {
    const clearFiltersData: FiltersData = {
      location: filtersData.location,
      form: null,
      transmission: null,
      engine: null,
    };
    setFilters(clearFiltersData);
    toast('Filters cleared');
  }
  return (
    <div className={css.containerCampersNotFound}>
      <Image
        className={css.campersNotFoundImage}
        src="/campers-not-found.png"
        alt="campers not found image"
        width={488}
        height={463}
      />
      <div className={css.textWrapper}>
        <h3 className={css.textHeading}>No campers found</h3>
        <p className={css.textDescription}>
          We couldn`t find any campers that match your filters.
          <br />
          Try adjusting your search or clearing some filters.
        </p>
      </div>
      <div className={css.buttonWrapper}>
        <button
          className={css.clearButton}
          onClick={handleClearFilters}
          type="button"
        >
          <svg className={css.iconClose} width={24} height={24}>
            <use href="/sprite.svg#icon-close" aria-hidden="true"></use>
          </svg>
          Clear filters
        </button>
        <button
          className={css.showAllButton}
          onClick={() => clearFilters()}
          type="button"
        >
          View all campers
        </button>
      </div>
    </div>
  );
}
