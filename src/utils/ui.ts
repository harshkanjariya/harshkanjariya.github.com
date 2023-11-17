import {getStorageData, setStorageData} from './storage';
import {storageKeys, themes} from './constants';

export function getCurrentEnvironment() {
  return getStorageData(storageKeys.ENV);
}

export function setEnvironment(env: string) {
  setStorageData(storageKeys.ENV, env);
}

export function getCurrentTheme() {
  let currentTheme = getStorageData(storageKeys.THEME);
  if (!currentTheme) {
    setStorageData(storageKeys.THEME, themes.light);
    currentTheme = themes.light;
  }
  document.documentElement.setAttribute('data-theme', currentTheme);
  return currentTheme;
}

export function toggleDarkTheme() {
  let currentTheme = getStorageData(storageKeys.THEME) || themes.light;
  if (currentTheme == themes.light) currentTheme = themes.dark;
  else currentTheme = themes.light;
  setStorageData(storageKeys.THEME, currentTheme);
  document.documentElement.setAttribute('data-theme', currentTheme);
  return currentTheme;
}