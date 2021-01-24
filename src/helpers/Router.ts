import Auth from './Auth';
import * as RouteConstants from '../constants/RouteConstants';
import Login from '../components/Login/Login';
import Main from '../components/Main';

class Router {
  userService = new Auth();

  detectBaseUserRoute() {
    const route = this.userService.isUserAuthorized()
      ? { path: RouteConstants.MainRoute.path, component: Main }
      : { path: RouteConstants.LoginRoute.path, component: Login };

    return route;
  }
}

export default Router;
