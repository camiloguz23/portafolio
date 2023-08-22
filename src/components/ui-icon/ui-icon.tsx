'use client';
import { Tooltip } from '@mui/material';
import * as Icons from '@tabler/icons-react';

interface Prop {
  icon: string;
  title?: string;
  color?: string;
  size?: number;
  code?: boolean;
  clear?: boolean;
}

type IconComponent = (props: { size?: number; color?: string }) => JSX.Element;

function UiIcon({ icon, color = 'rgba(123, 74, 226, 0.50)', size = 24, code = false, title = '', clear = false }: Prop): JSX.Element {
  const getIcon = (name: string, size: number, color: string, code: boolean): React.ReactElement => {
    const nameConstructor = code ? 'IconBrand' : 'Icon';
    const IconComponents = Icons[`${nameConstructor}${name}` as keyof typeof Icons] as IconComponent;
    const propriety = clear ? {} : { size, color };
    return <IconComponents {...propriety} /> || <span></span>;
  };

  return <>{title ? <Tooltip title={title}>{getIcon(icon, size, color, code)}</Tooltip> : <>{getIcon(icon, size, color, code)}</>}</>;
}

export default UiIcon;
