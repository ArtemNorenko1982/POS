import { createContext } from 'react';
import IUserState from '../Types/UserState';

const AuthContext = createContext({
  user: {},
  login: (userData: IUserState) => {},
  logout: () => {},
});

export default AuthContext;
