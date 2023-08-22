'use client';
import { LIST_SKILL } from '@/constants';
import { GridLayout } from '@/layout';
import { UiIcon } from '@/components';
import style from './ui-skill.module.scss';
import { useTranslate } from '@/hooks';

const size = 80;

function UiSkill(): JSX.Element {
  const { onTranslate } = useTranslate();
  return (
    <div>
      <h3 className={style.titleSkill}>{onTranslate('technology')}</h3>
      <GridLayout sizeMin={size}>
        {LIST_SKILL.map((item) => (
          <UiIcon icon={item} size={size} code={true} key={item} title={item} />
        ))}
      </GridLayout>
    </div>
  );
}

export default UiSkill;
