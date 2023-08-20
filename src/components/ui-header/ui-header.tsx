import { UiNavbar } from '@/components';
import style from './ui-header.module.scss';

function UiHeader(): JSX.Element {
  return (
    <header className={style.header}>
      <img src='/img/code.svg' alt='code' />
      <UiNavbar />
    </header>
  );
}

export default UiHeader;
