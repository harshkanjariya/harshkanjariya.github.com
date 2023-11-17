import {handleEnterClick, handleKeyboardClick} from './keyboardEvents';

export function init() {
  handleKeyEvents();
}

function handleKeyEvents() {
  document.addEventListener('keydown', (e) => {
    handleKeyboardClick(e);
    switch (e.key) {
      case 'Enter':
        handleEnterClick();
    }
  });
}