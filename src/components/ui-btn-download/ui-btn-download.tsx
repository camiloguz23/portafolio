'use client';
import { CV } from '@/constants';
import { useTranslate } from '@/hooks/useTranslate';
import style from './ui-btn-download.module.scss';
import { IconFileDownload } from '@tabler/icons-react';

function UiBtnDownload(): JSX.Element {
  const { lang, onTranslate } = useTranslate();
  return (
    <a href={CV[lang]} className={style.download} download>
      {onTranslate('download')}  <IconFileDownload />
    </a>
  );
}

export default UiBtnDownload;
