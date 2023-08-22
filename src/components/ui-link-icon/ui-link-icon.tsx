import style from './ui-link-icon.module.scss';
import { type IconEnum } from '@/enum';
import { UiIcon } from '..';

interface Prop {
  icon: IconEnum;
  path: string;
  size: number;
  haveBrand?: boolean;
  title?: string;
}

function UiLinkIcon({ icon, path, size, haveBrand = false, title = '' }: Prop): JSX.Element {
  return (
    <a className={style.link} href={path} target='_blank' rel='noreferrer'>
      <UiIcon icon={icon} size={size} code={haveBrand} title={title} />
    </a>
  );
}

export default UiLinkIcon;
