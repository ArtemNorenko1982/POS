import { CurrentUser, Token } from '../constants/LocalStorageConstants';
import { isNull } from '../utils/utils';

class Auth {
  login(username: string, password: string) {
    localStorage.setItem(CurrentUser, username);
    localStorage.setItem(Token, password);
  }

  logout() {
    localStorage.removeItem(CurrentUser);
    localStorage.removeItem(Token);
  }

  getNewPassword(email: string) {
    const val = email;
    // eslint-disable-next-line no-console
    console.log(val);
  }

  isUserAuthorized() {
    const result = !isNull(localStorage.getItem(Token));
    return result;
  }

  getUserName() {
    return `${localStorage.getItem(CurrentUser)}`;
  }
}

export default Auth;
