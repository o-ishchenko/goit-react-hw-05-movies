import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';

function Layout() {
  return (
    <div className={styles.container}>
      <AppBar />
      <Outlet />
    </div>
  );
}

export default Layout;
