import { CurentUser, Token } from "../../constants/LocalStorageUnits";
import { isNull } from "../../utils/utils";

export class UserService {

    login(username: string, password: string) {
        localStorage.setItem(CurentUser, "User Name");
        localStorage.setItem(Token, "123456789_Test_Token");
    }

    logout() {
        localStorage.removeItem(CurentUser);
        localStorage.removeItem(Token);
    }

    getNewPassword(email: string) {

    }

    isUserAuthorized(): boolean {
        return !isNull(localStorage.getItem(Token));
    }

    getUserName(): string {
        return `${localStorage.getItem(CurentUser)}`;
    }
}