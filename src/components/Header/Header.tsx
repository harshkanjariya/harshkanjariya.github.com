import React from 'react';
import styles from './Header.module.scss';
import ThemeButton from '../ThemeButton/ThemeButton';

function Header() {
  return <div className={styles.header}>
    <div className={styles.title}>Portfolio</div>
    <div className={styles.themeButton}>
      <ThemeButton />
    </div>
  </div>;
}

export default Header;