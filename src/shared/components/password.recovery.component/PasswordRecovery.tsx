import React from 'react';
import { Link } from 'react-router-dom';

const PasswordRecovery = () => {
  return (
    <div className="row main-screen">
      <form className="login" method="post">
        <h3>Password recovery</h3>
        <p>Please enter your username or email. You will be sent a
          link via email to create a new password 
        </p>
        <label htmlFor="userName">
          <input id="userName" className="input-common login-input" type="text" placeholder="User name or email" />
        </label>
        <button type="button" className="common-button full-width">Get a new password</button>
        <Link className="common-link full-width"> Back </Link>
      </form>
    </div>
  );
};

export default PasswordRecovery;
