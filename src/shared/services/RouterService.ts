import UserService from './UserService';
import * as RouteConstants from '../../constants/RouteConstants';
import Login from '../components/login.component/Login';
import Home from '../components/home.component/Home';

class RouterService {
  userService = new UserService();

  detectBaseUserRoute() {
    const route = this.userService.isUserAuthorized()
      ? { path: RouteConstants.HomeRoute.path, component: Home }
      : { path: RouteConstants.LoginRoute.path, component: Login };

    return route;
  }
}

export default RouterService;
