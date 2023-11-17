import React, {useContext, useState} from 'react';
import {getCurrentTheme, toggleDarkTheme} from '../utils/ui';
import {createTheme, ThemeProvider as MaterialThemeProvider} from '@mui/material';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Theme} from '../utils/types';

interface IThemeContext {
  currentTheme: Theme,
  toggleTheme: () => void,
}

export const ThemeContext = React.createContext<IThemeContext>({} as IThemeContext);

function ThemeProvider(props: any) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(getCurrentTheme());

  function toggleTheme() {
    const newTheme = toggleDarkTheme();
    setCurrentTheme(newTheme);
  }

  const materialTheme = createTheme({
    palette: {
      mode: currentTheme,
    },
  });
  return <ThemeContext.Provider value={{
    currentTheme,
    toggleTheme,
  }}>
    <ToastContainer/>
    <MaterialThemeProvider theme={materialTheme}>
      {props.children}
    </MaterialThemeProvider>
  </ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeProvider;