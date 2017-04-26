import React from 'react';

const LoginForm = ({onSubmit}) => {
  let username, password;
  return (
    <form
      onSubmit={event => {
        onSubmit(event, username.value, password.value);
      }}
    >
      <p>
        <label htmlFor="username">Nombre usuario:</label>
        <br />
        <input type="text" ref={node => username = node} />
      </p>

      <p>
        <label htmlFor="username">Password</label>
        <br />
        <input type="password" ref={node => password = node} />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
