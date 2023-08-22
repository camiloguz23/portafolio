'use client'
import { useTranslate } from '@/hooks';
import style from './ui-user-info.module.scss';
import { UiIcon } from '@/components';
import { IconEnum } from '@/enum';

export default function UiInfoUser(): JSX.Element {
  const { onTranslate } = useTranslate()
  return (
    <div className={style.containerInfo}>
      <div className={`${style.card} ${style.simple}`}>
        <UiIcon icon={IconEnum.code} size={60}/>
        <p className={style.year}>2 {onTranslate('programmer')}</p>
        <p className={style.details}>{onTranslate('code')}</p>
      </div>
      <div className={`${style.card} ${style.simple}`}>
        <UiIcon icon={IconEnum.briefCase} size={60} />
        <p className={style.year}>2 {onTranslate('job')}</p>
        <p className={style.details}>{onTranslate('work')}</p>
      </div>
    </div>
  );
}
