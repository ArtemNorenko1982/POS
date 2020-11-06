import { CURENTUSER, TOKEN } from '../../constants/LocalStorageConstants';
import { isNull } from '../../utils/utils';

class UserService {

  login(username: string, password: string): void {
    localStorage.setItem(CURENTUSER, username);
    localStorage.setItem(TOKEN, password);
  }

  logout(): void {
    localStorage.removeItem(CURENTUSER);
    localStorage.removeItem(TOKEN);
  }

  getNewPassword(email: string): void {
  }

  isUserAuthorized(): boolean {
    return !isNull(localStorage.getItem(TOKEN));
  }

  getUserName(): string {
    return `${localStorage.getItem(CURENTUSER)}`;
  }
}

export default UserService;
