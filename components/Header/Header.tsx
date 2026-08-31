'use client';

import Link from 'next/link';
import css from './Header.module.css';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Header() {
  const pathName = usePathname();
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Link href="/" className={css.logo}>
          <svg className={css.iconLogo} width={136} height={16}>
            <use href="/sprite.svg#icon-logo" aria-hidden="true"></use>
          </svg>
        </Link>
        <div className={css.menu}>
          <nav className={css.navigation}>
            <ul className={css.navigationList}>
              <li className={css.navigationItem}>
                <Link
                  className={clsx(
                    css.navigationLink,
                    pathName === '/' && css.activeLink
                  )}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className={css.navigationItem}>
                <Link
                  className={clsx(
                    css.navigationLink,
                    pathName === '/catalog' && css.activeLink
                  )}
                  href="/catalog"
                >
                  Catalog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
