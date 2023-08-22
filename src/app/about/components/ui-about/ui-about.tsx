'use client';
import { UiUserImg } from '@/components';
import style from './ui-about.module.scss';
import { useTranslate } from '@/hooks';

function UiAbout(): JSX.Element {
  const { onTranslate } = useTranslate();
  return (
    <div className={style.containerAbout}>
      <div className={`${style.item} ${style.avatar}`}>
        <UiUserImg pathImg='/img/user.svg' alt='user' />
      </div>
      <div className={style.item}>
        <p className={style.greeting}>{onTranslate('hello')}</p>
        <p className={style.info}>{onTranslate('description')}</p>
        <h3 className={style.title}>{onTranslate('Ido')}</h3>
        <ul>
          <li>
            <b className={style.title}>Fronted: </b> {onTranslate('frontend')}
          </li>
          <li>
            <b className={style.title}>Backend: </b> {onTranslate('backend')}
          </li>
        </ul>
        <p className={style.info}>{onTranslate('complement')}</p>
      </div>
    </div>
  );
}

export default UiAbout;
