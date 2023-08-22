'use client';
import { Tooltip } from '@mui/material';
import * as Icons from '@tabler/icons-react';

interface Prop {
  icon: string;
  title?: string;
  color?: string;
  size: number;
  code?: boolean;
}
function UiIcon({ icon, color = 'rgba(123, 74, 226, 0.50)', size, code = false, title = '' }: Prop): JSX.Element {
  const getIcon = (name: string, size: number, color: string, code: boolean): React.ReactElement => {
    const nameConstructor = code ? 'IconBrand' : 'Icon';
    const IconComponents = Icons[`${nameConstructor}${name}` as keyof typeof Icons];
    return <IconComponents size={size} color={color} /> || <span></span>;
  };

  return <>{title ? <Tooltip title={title}>{getIcon(icon, size, color, code)}</Tooltip> : <>{getIcon(icon, size, color, code)}</>}</>;
}

export default UiIcon;
