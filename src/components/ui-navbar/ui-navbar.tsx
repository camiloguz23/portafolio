'use client';

import { ROUTES } from '@/constants';
import { useTranslate } from '@/hooks/useTranslate';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import style from './ui-navbar.module.scss';

interface Prop {
  isOpen: boolean;
}

function UiNavbar({ isOpen }: Prop): JSX.Element {
  const { onTranslate } = useTranslate();
  const path = usePathname();
  return (
    <nav className={`${style.navbar} ${isOpen ? style.open : style.close}`}>
      {ROUTES.map((route) => (
        <Link className={`${style.link} ${route.path === path ? style.active : ''}`} key={route.name} href={route.path}>
          {onTranslate(route.name)}
        </Link>
      ))}
    </nav>
  );
}

export default UiNavbar;
