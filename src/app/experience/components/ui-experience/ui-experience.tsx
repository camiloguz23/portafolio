'use client';
import { useTranslate } from '@/hooks';
import style from './ui-experience.module.scss';
import { UiIcon } from '@/components';
import { IconEnum } from '@/enum';
import { GridLayout } from '@/layout';
import { EXPERIENCE } from '@/constants';

function UiExperience(): JSX.Element {
  const { onTranslate } = useTranslate();
  return (
    <div className={style.containerExperience}>
      <h2 className={style.titleExperience}>{onTranslate('titleExperience')}</h2>
      <p className={style.timeExperience}>
        <UiIcon icon={IconEnum.briefCase} size={26} /> 2 {onTranslate('yearsJob')} 1 {onTranslate('month')}
      </p>
      <GridLayout sizeMin={300}>
        {EXPERIENCE.map((item) => (
          <div key={item.name} className={style.card}>
            <p className={style.titleCard}>{item.name}</p>
            <p className={style.rol}>{item.rol}</p>
            <p className={style.descriptionCard}>{onTranslate(item.description)}</p>
            <div className={style.code}>
                <span>{item.time[0]} {onTranslate(item.time[1])}</span> <span>{item.timeDate}</span>
            </div>
          </div>
        ))}
      </GridLayout>
    </div>
  );
}

export default UiExperience;
