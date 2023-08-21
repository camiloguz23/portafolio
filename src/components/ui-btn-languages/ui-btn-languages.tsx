'use client';

import { useTranslate } from '@/hooks';
import { IconLanguage } from '@tabler/icons-react';
import style from './ui-btn-languages.module.scss';

function UiBtnLanguages(): JSX.Element {
  const { onSetLanguage, lang } = useTranslate();

  const setLanguages = (): void => {
    const setLang = lang === 'en' ? 'es' : 'en';

    onSetLanguage(setLang);
  };
  return (
    <button className={style.btnLang} type='button' onClick={setLanguages}>
      {lang} <IconLanguage size={22} color='white' />
    </button>
  );
}

export default UiBtnLanguages;
