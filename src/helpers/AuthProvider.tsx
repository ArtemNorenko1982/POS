import React, { useReducer } from 'react';
import { determineUserData, setUserToken, dropUserToken } from './UserService';
import AuthReducer from './AuthReducer';
import AuthContext from './Contexts/AuthContext';

const initialState = {
  user: {},
};

const AuthProvider = (props) => {
  initialState.user = determineUserData();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = (userData) => {
    setUserToken(userData);
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  };

  const logout = () => {
    dropUserToken();
    dispatch({
      type: 'LOGOUT',
    });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
