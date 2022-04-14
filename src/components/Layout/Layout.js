import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from 'components/AppBar';
import Loader from 'components/Loader';

function Layout() {
  return (
    <div className={styles.container}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={1500} position="top-center" />
    </div>
  );
}

export default Layout;
