'use client';

import { useTranslate } from '@/hooks';
import style from './ui-btn-languages.module.scss';
import { UiIcon } from '..';
import { IconEnum } from '@/enum';

function UiBtnLanguages(): JSX.Element {
  const { onSetLanguage, lang } = useTranslate();

  const setLanguages = (): void => {
    const setLang = lang === 'en' ? 'es' : 'en';

    onSetLanguage(setLang);
  };
  return (
    <button className={style.btnLang} type='button' onClick={setLanguages}>
      {lang} <UiIcon size={22} color='white' icon={IconEnum.translate}/>
    </button>
  );
}

export default UiBtnLanguages;
