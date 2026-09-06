import Loader from '@/components/Loader/Loader';
import css from './loading.module.css';
export default function Loading() {
  return (
    <div className={css.pageLoaderWrapper}>
      <Loader />
    </div>
  );
}
