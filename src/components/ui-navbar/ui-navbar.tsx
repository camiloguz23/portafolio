'use client';

import { ROUTES } from '@/constants';
import { useTranslate } from '@/hooks/useTranslate';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import style from './ui-navbar.module.scss';

function UiNavbar(): JSX.Element {
  const { onTranslate } = useTranslate();
  const path = usePathname();
  return (
    <nav className={style.navbar}>
      {ROUTES.map((route) => (
        <Link className={`${style.link} ${route.path === path ? style.active : ''}`} key={route.name} href={route.path}>
          {onTranslate(route.name)}
        </Link>
      ))}
    </nav>
  );
}

export default UiNavbar;
