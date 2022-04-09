import styles from './AppBar.module.css';
import Navigation from 'components/Navigation';
import React from 'react';

export default function AppBar() {
  return (
    <header className={styles.container}>
      <Navigation />
    </header>
  );
}
