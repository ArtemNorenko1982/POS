/* eslint-disable class-methods-use-this */
import { CURENTUSER, TOKEN } from '../../constants/LocalStorageConstants';
import { isNull } from '../../utils/utils';

class UserService {

  login(username: string, password: string) {
    localStorage.setItem(CURENTUSER, 'User Name');
    localStorage.setItem(TOKEN, '123456789_Test_Token');
  }

  logout() {
    localStorage.removeItem(CURENTUSER);
    localStorage.removeItem(TOKEN);
  }

  getNewPassword(email: string) {
  }

  isUserAuthorized(): boolean {
    return !isNull(localStorage.getItem(TOKEN));
  }

  getUserName(): string {
    return `${localStorage.getItem(CURENTUSER)}`;
  }
}

export default UserService;
