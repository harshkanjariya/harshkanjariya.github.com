import React, {useEffect} from 'react';
import Header from '../../components/Header/Header';
import Typing from '../../components/Welcome/Typing/Typing';
import EnvironmentSelection from '../../components/Welcome/EnvironmentSelection/EnvironmentSelection';
import {useLocation, useNavigate} from 'react-router-dom';
import {routes} from '../../core/router';
import {environments} from '../../utils/constants';
import {getCurrentEnvironment} from '../../utils/ui';

const messageList = [
  'Hello!',
  'I\'m Harsh Kanjariya.',
  'Welcome to my portfolio.',
];


function Welcome() {
  const navigate = useNavigate();
  const location = useLocation();
  const env = getCurrentEnvironment();

  useEffect(() => {
    if (!location.hash.length) {
      if (env == environments.windows) {
        navigate(routes.windows);
      } else if (env === environments.terminal) {
        navigate(routes.terminal);
      }
    }
  }, []);

  let CenterComponent;
  if (location.hash === '') {
    CenterComponent = <EnvironmentSelection onSelect={(selectedEnv) => {
      if (selectedEnv == environments.windows) {
        navigate('/#typing', {
          state: {
            navigate: routes.windows,
            messageList: ['Here\'s my life,\n if it was windows.'],
          }
        });
      } else {
        navigate('/#typing', {
          state: {
            navigate: routes.terminal,
            messageList: ['Here\'s my life,\n if it was terminal.'],
          }
        });
      }
    }}/>;
  } else if (location.hash == '#typing') {
    CenterComponent = <Typing
      messageList={location.state.messageList || []}
      onEnd={() => navigate(location.state.navigate)}
    />;
  } else if (location.hash == '#welcome') {
    CenterComponent = <Typing
      messageList={messageList}
      onEnd={() => navigate('/#environments')}
    />;
  }

  return <>
    <Header/>
    {CenterComponent}
  </>;
}

export default Welcome;
