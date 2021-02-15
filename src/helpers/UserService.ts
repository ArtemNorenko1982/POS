import jwtDecode from 'jwt-decode';
import { Token } from '../constants/LocalStorageConstants';
import { isNull } from '../utils/utils';
import IUserState from './Types/UserState';

const storedToken = localStorage.getItem(Token);
let userData: IUserState = {
  userName: '',
  password: '',
  exp: 0,
};

const isUserAuthorized = () => {
  return !isNull(storedToken);
};

const determineUserData = () => {
  const result = !isNull(storedToken);
  if (result) {
    userData = jwtDecode<IUserState>(storedToken as string);
    if (userData.exp * 1000 < Date.now()) {
      localStorage.removeItem(Token);
    }
  }
  return userData;
};

const setUserToken = (data) => {
  localStorage.setItem(Token, data.token);
};

const dropUserToken = () => {
  localStorage.removeItem(Token);
};

export { determineUserData, setUserToken, dropUserToken, isUserAuthorized };
