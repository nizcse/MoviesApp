import { authNavigationRouteNames } from "../routeName/authNavigationRouteName";


export type authNavigationParams = {
    [authNavigationRouteNames.WELCOME]:undefined;
    [authNavigationRouteNames.SELECT_GENRE]:{name:string};
}