import styles from './AppBar.module.css';
import Navigation from 'components/Navigation';

export default function AppBar() {
  return (
    <header className={styles.container}>
      <Navigation />
    </header>
  );
}
