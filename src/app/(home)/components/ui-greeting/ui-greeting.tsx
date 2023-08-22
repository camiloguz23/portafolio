'use client';
import { useTranslate } from '@/hooks/useTranslate';
import style from './ui-greeting.module.scss';
import { LINK_PROFILE } from '@/constants';
import { UiLinkIcon } from '@/components';

function UiGreeting(): JSX.Element {
  const { onTranslate } = useTranslate();
  return (
    <div className={style.containerGreeting}>
      <span>
        <i>👋</i> {onTranslate('greeting')}
      </span>
      <p className={style.name}>Jeyson Camilo Guzman</p>
      <p className={style.rol}>Front-end Engineer Developer</p>
      <div className={style.link}>
        {LINK_PROFILE.map((item) => (
          <UiLinkIcon key={item.path} icon={item.icon} path={item.path} size={50} haveBrand={true} title={item.name}/>
        ))}
      </div>
    </div>
  );
}

export default UiGreeting;
