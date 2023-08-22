'use client';

import { useTranslate } from '@/hooks';
import style from './ui-portfolio.module.scss';
import { GridLayout } from '@/layout';
import { PROJECTS } from '@/constants';
import { UiLinkIcon } from '@/components';
import { IconEnum } from '@/enum';

function UiPortfolio(): JSX.Element {
  const { onTranslate } = useTranslate();
  return (
    <>
      <h2 className={style.titlePortfolio}>{onTranslate('titlePortfolio')}</h2>
      <GridLayout sizeMin={300}>
        {PROJECTS.map((item) => (
          <div key={item.title} className={style.card}>
            <p className={style.titleCard}>{item.title}</p>
            <p className={style.descriptionCard}>{onTranslate(item.description)}</p>
            <div className={style.links}>
              <UiLinkIcon icon={IconEnum.github} path={item.github} size={30} haveBrand={true} title='Github' />
              <UiLinkIcon icon={IconEnum.browser} path={item.page} size={30} title='Page' />
            </div>
            <div className={style.code}>
              {item.code.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <img className={style.img} src={item.image} alt={item.title} />
          </div>
        ))}
      </GridLayout>
    </>
  );
}

export default UiPortfolio;
