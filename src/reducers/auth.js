import typeToReducer from 'type-to-reducer';
import {AUTHENTICATE} from './../constants';

const authInitialState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

const requestAuthentication = state => ({
  ...state,
  loading: true,
  user: null,
  error: null,
  token: null,
});

const receiveAuthentication = (state, {payload: {user, token}}) => ({
  ...state,
  token,
  user,
  loading: false,
  error: null,
});

const receiveAuthenticationError = (state, {payload: error}) => ({
  ...state,
  loading: false,
  error,
});

const authReducers = {
  [AUTHENTICATE]: {
    PENDING: requestAuthentication,
    REJECTED: receiveAuthenticationError,
    FULFILLED: receiveAuthentication,
  },
};

export default typeToReducer(authReducers, authInitialState);
