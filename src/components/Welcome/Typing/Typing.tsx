import {useTheme} from '../../../core/ThemeProvider';
import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {TypewriterHandlers} from 'typing-animation-react/stories/Typewriter/Typewriter';
import {addEnterCallback, removeEnterCallback} from '../../../utils/keyboardEvents';
import Typewriter from 'typing-animation-react';
import {themes} from '../../../utils/constants';
import styles from './Typing.module.scss';

export interface TypingProps {
  messageList: string[],
  className?: string,
  onEnd: () => void,
}

function Typing({messageList, ...props}: TypingProps) {
  const {currentTheme} = useTheme();
  const [messageIndex, setMessageIndex] = useState(0);
  const [animEndTime, setAnimEndTime] = useState(-1);
  const typewriter = useRef<TypewriterHandlers>({} as any);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    typewriter.current.write(messageList[0]);
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  const onEnter = useCallback(() => {
    if (Date.now() - animEndTime > 500) {
      if (messageList.length - 1 == messageIndex) {
        props.onEnd();
      } else {
        const deleteLength = messageList[messageIndex].length;
        const nextMessage = messageList[messageIndex + 1];
        typewriter.current.deleteChars(deleteLength);
        typewriter.current.write(nextMessage);
        setMessageIndex(messageIndex + 1);
        setAnimEndTime(-1);
      }
    }
  }, [typewriter.current, messageIndex, animEndTime]);

  useEffect(() => {
    addEnterCallback(onEnter);
    return () => {
      removeEnterCallback(onEnter);
    };
  }, [onEnter]);

  return <div className={'page-body ' + styles.typing} onTouchStart={onEnter}>
    <Typewriter
      style={{
        fontSize: '30px',
        maxWidth: 500,
        textAlign: 'center',
        transform: 'translateY(-100%)'
      }}
      cursorWidth={3}
      cursorColor={currentTheme == themes.dark ? 'white' : 'black'}
      ref={typewriter}
      delay={50}
      onAnimationEnd={() => setAnimEndTime(Date.now())}
    />
    <div style={{
      position: 'fixed',
      right: 0,
      bottom: 0
    }}>{isMobile ? 'Tap to continue...' : 'Press Enter to continue...'}</div>
  </div>;
}

export default Typing;
