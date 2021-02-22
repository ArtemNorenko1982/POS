import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isStringNull } from '../utils/utils';

import AuthContext from './Contexts/AuthContext';
import IUserState from './Types/UserState';
import { isUserAuthorized } from './UserService';

// eslint-disable-next-line react/prop-types
const AuthRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  const isUserLegal =
    isUserAuthorized() &&
    !isStringNull((user as IUserState).userName) &&
    (user as IUserState).exp > 0;
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(props) =>
        // eslint-disable-next-line react/jsx-props-no-spreading
        isUserLegal === false ? (
          <Redirect to="/login" />
        ) : (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Component {...props} />
        )
      }
    />
  );
};

export default AuthRoute;
