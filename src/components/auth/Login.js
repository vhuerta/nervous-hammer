/*eslint-disable no-unused-vars*/
import React from 'react';
import LoginForm from './login/LoginForm';

const Login = ({onSubmit}) => {
  return (
    <div>
      <h1>Login form</h1>
      <LoginForm
        onSubmit={(event, username, password) => {
          event.preventDefault();
          onSubmit(username, password);
        }}
      />
    </div>
  );
};

export default Login;
