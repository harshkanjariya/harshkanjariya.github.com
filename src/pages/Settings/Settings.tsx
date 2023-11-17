import React from 'react';
import {Switch} from '@mui/material';
import {getCurrentEnvironment, setEnvironment} from '../../utils/ui';
import {environments} from '../../utils/constants';
import {useNavigate} from 'react-router-dom';
import {routes} from '../../core/router';

function Settings() {
  const env = getCurrentEnvironment();
  const navigate = useNavigate();

  return <div className={'page-body'}>
    <table>
      <tbody>
      <tr>
        <td>
          <Switch
            onChange={(e) => setEnvironment(e.currentTarget.checked ? environments.windows : '')}
            defaultChecked={env == environments.windows}/>
        </td>
        <td>Keep me login to this computer</td>
      </tr>
      <tr>
        <td></td>
        <td
          style={{cursor: 'pointer'}}
          onClick={() => navigate(routes.motherboard)}
        >Open motherboard</td>
      </tr>
      </tbody>
    </table>
  </div>;
}

export default Settings;