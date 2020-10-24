import { CurentUser, Token } from "../../constants/LocalStorageUnits";

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
}