import React from 'react';
import {DarkMode, LightMode} from '@mui/icons-material';
import styles from './ThemeButton.module.css';
import {themes} from '../../utils/constants';
import {useTheme} from '../../core/ThemeProvider';

function ThemeButton() {
  const {currentTheme, toggleTheme} = useTheme();

  return <div className={styles.themeButton}>
    <input type="checkbox"
           onChange={toggleTheme}
           defaultChecked={currentTheme == themes.dark}
           className={styles.checkbox}
           id="checkbox"/>
    <label htmlFor="checkbox" className={styles.label}>
      <DarkMode className={styles.moon}/>
      <LightMode className={styles.sun}/>
      <span className={styles.ball}/>
    </label>
  </div>;
}

export default ThemeButton;