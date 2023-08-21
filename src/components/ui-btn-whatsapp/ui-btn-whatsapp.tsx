'use client';

import { useTranslate } from '@/hooks/useTranslate';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import style from './ui-btn-whatsapp.module.scss';

function UiBtnWhatsAap(): JSX.Element {
  const { onTranslate } = useTranslate();
  return (
    <a href='https://wa.me/573238082776' target='_blank' rel='noreferrer' className={style.whatsApp}>
      {onTranslate('whatsApp')}
      <IconBrandWhatsapp />
    </a>
  );
}

export default UiBtnWhatsAap;
