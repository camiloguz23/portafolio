import { UiUserImg } from './components';
import UiGreeting from './components/ui-greeting/ui-greeting';
import styles from './page.module.scss';

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <UiGreeting />
      <UiUserImg pathImg='/img/user.svg' alt='avatar'/>
    </main>
  );
}
