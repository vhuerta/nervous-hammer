import Auth from './../lib/auth';
import {AUTHENTICATE, MESSAGE} from './../constants';

const authenticate = ({username, password}) => {
  return dispatch => {
    return dispatch({
      type: AUTHENTICATE,
      payload: Auth.login(username, password),
    }).catch(payload => dispatch({type: MESSAGE, payload}));
  };
};

const auth = {authenticate};

export default auth;
