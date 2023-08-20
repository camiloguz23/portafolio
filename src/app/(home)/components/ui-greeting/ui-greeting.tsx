'use client';
import { useTranslate } from '@/hooks/useTranslate';
import style from './ui-greeting.module.scss';

function UiGreeting(): JSX.Element {
  const { onTranslate } = useTranslate();
  return (
    <div className={style.containerGreeting}>
      <span><i>👋</i> {onTranslate('greeting')}</span>
      <p className={style.name}>Jeyson Camilo Guzman</p>
      <p className={style.rol}>Front-end Engineer Developer</p>
    </div>
  );
}

export default UiGreeting;
