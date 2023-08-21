import { UiUserImg } from '@/components';
import { UiGreeting, UiInfoUser, UiSectionCV } from './components/';
import styles from './page.module.scss';

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.avatar}>
        <UiGreeting />
        <UiUserImg pathImg='/img/user.svg' alt='avatar' />
        <UiSectionCV />
      </div>
      <UiInfoUser />
    </main>
  );
}
