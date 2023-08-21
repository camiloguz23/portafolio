'use client';
import { UiNavbar } from '@/components';
import { useState } from 'react';
import style from './ui-header.module.scss';
import { useDevice } from '@/hooks';

function UiHeader(): JSX.Element {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { isMobile } = useDevice();
  return (
    <header className={style.header}>
      <img
        src='/img/code.svg'
        alt='code'
        onClick={() => {
          isMobile && setOpenMenu(!openMenu);
        }}
      />

      <div className={style.position}>
        <UiNavbar isOpen={openMenu} />
      </div>
    </header>
  );
}

export default UiHeader;
