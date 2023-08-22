'use client';
import { CV } from '@/constants';
import { useTranslate } from '@/hooks/useTranslate';
import style from './ui-btn-download.module.scss';
import { UiIcon } from '..';
import { IconEnum } from '@/enum';

function UiBtnDownload(): JSX.Element {
  const { lang, onTranslate } = useTranslate();
  return (
    <a href={CV[lang]} className={style.download} download>
      {onTranslate('download')} <UiIcon icon={IconEnum.download} clear={true} />
    </a>
  );
}

export default UiBtnDownload;
