import css from './Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={css.container}>
      <main className={css.main}>
        <section className={css.section}>
          <Image
            className={css.heroImage}
            src="/hero.jpg"
            alt="hero image"
            fill
            priority
          />
          <div className={css.contentWrapper}>
            <div className={css.headingWrapper}>
              <h1 className={css.heroHeading}>Campers of your dreams</h1>
              <p className={css.heroDescription}>
                You can find everything you want in our catalog
              </p>
            </div>

            <Link href="/catalog" className={css.heroButton}>
              View Now
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
