import { CurrentUser, Token } from '../../constants/LocalStorageConstants';
import { isNull } from '../../utils/utils';

class UserService {
  login(username: string, password: string): void {
    localStorage.setItem(CurrentUser, username);
    localStorage.setItem(Token, password);
  }

  logout(): void {
    localStorage.removeItem(CurrentUser);
    localStorage.removeItem(Token);
  }

  getNewPassword(email: string): void {}

  isUserAuthorized(): boolean {
    const result = !isNull(localStorage.getItem(Token));
    return result;
  }

  getUserName(): string {
    return `${localStorage.getItem(CurrentUser)}`;
  }
}

export default UserService;
