'use client';
import { useTranslate } from '@/hooks/useTranslate';
import style from './ui-btn-whatsapp.module.scss';
import { UiIcon } from '..';
import { IconEnum } from '@/enum';

function UiBtnWhatsAap(): JSX.Element {
  const { onTranslate } = useTranslate();
  return (
    <a href='https://wa.me/573238082776' target='_blank' rel='noreferrer' className={style.whatsApp}>
      {onTranslate('whatsApp')}
      <UiIcon icon={IconEnum.whatsApp} clear={true} code={true} />
    </a>
  );
}

export default UiBtnWhatsAap;
