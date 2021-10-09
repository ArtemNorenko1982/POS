import { createContext } from 'react';
import IUserState from '../Types/UserState';

const AuthContext = createContext({
  user: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (userData: IUserState) => {},
  logout: () => {},
});

export default AuthContext;
