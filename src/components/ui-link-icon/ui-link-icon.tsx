'use client';
import { LinkedIn, GitHub } from '@mui/icons-material';
import style from './ui-link-icon.module.scss';
import { type Links } from '@/enum';

interface Prop {
  icon: Links;
  path: string;
}

const ICONS: Record<string, React.ReactNode> = {
  linkedin: <LinkedIn fontSize='large' />,
  github: <GitHub fontSize='large' />
};

function UiLinkIcon({ icon, path }: Prop): JSX.Element {
  return (
    <a className={style.link} href={path} target='_blank' rel='noreferrer'>
      {ICONS[icon]}
    </a>
  );
}

export default UiLinkIcon;
