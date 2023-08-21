'use client'
import { useTranslate } from '@/hooks';
import style from './ui-user-info.module.scss';
import { IconCode, IconBriefcase } from '@tabler/icons-react';

export default function UiInfoUser(): JSX.Element {
  const { onTranslate } = useTranslate()
  return (
    <div className={style.containerInfo}>
      <div className={`${style.card} ${style.simple}`}>
        <IconCode size={60} color='rgba(123, 74, 226, 0.50)'/>
        <p className={style.year}>2 {onTranslate('programmer')}</p>
        <p className={style.details}>{onTranslate('code')}</p>
      </div>
      <div className={`${style.card} ${style.simple}`}>
        <IconBriefcase size={60} color='rgba(123, 74, 226, 0.50)'/>
        <p className={style.year}>2 {onTranslate('programmer')}</p>
        <p className={style.details}>{onTranslate('work')}</p>
      </div>
    </div>
  );
}
