import { isUserAuthorized } from './UserService';
import * as RouteConstants from '../constants/RouteConstants';
import Login from '../components/Login/Login';
import Main from '../components/Main';

class Router {
  detectBaseUserRoute() {
    const route =
      isUserAuthorized() === true
        ? { path: RouteConstants.MainRoute.path, component: Main }
        : { path: RouteConstants.LoginRoute.path, component: Login };

    return route;
  }
}

export default Router;
