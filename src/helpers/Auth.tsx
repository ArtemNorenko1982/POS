import React, { useReducer, createContext } from 'react';
import jwtDecode from 'jwt-decode';
import { Token } from '../constants/LocalStorageConstants';
import { isNull } from '../utils/utils';
import IUserState from './Types/UserSate';

const initialState = {
  user: {},
};

const storedToken = localStorage.getItem(Token);

if (!isNull(storedToken)) {
  const token = jwtDecode(storedToken as string) as IUserState;
  if (token.exp * 1000 < Date.now()) {
    localStorage.removeItem(Token);
  } else {
    initialState.user = token;
  }
}

const AuthContext = createContext({
  user: {},
  login: (userData) => {},
  logout: () => {},
});

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const authProvider = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData) => {
    localStorage.setItem(Token, userData.token);
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  };

  const logout = () => {
    localStorage.removeItem(Token);
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

const isUserAuthorized = () => {
  const result = !isNull(localStorage.getItem(Token));
  return result;
};

export { AuthContext, authProvider, isUserAuthorized };
