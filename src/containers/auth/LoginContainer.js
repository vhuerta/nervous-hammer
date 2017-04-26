import {connect} from 'react-redux';

import Login from './../../components/auth/Login';
import actions from './../../actions/';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (username, password) => {
      dispatch(actions.auth.authenticate({username, password}));
    },
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
