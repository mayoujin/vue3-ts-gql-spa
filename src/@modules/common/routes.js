import { ROUTE as ROUTE_HOME } from '@modules/common/pages/Home/routes';
import { ROUTE as ROUTE_ABOUT } from '@modules/common/pages/About/routes';
import { ROUTE as ROUTE_TEST_RESHADOW } from '@modules/common/pages/TestReshadow/routes';
/**
 * Alias Enum for using in external referencing
 */
export const ROUTES = {
    ABOUT: ROUTE_ABOUT,
    HOME: ROUTE_HOME,
    TEST: ROUTE_TEST_RESHADOW,
};
/**
 * Routes list, to import in global routes list config
 */
export const routes = [ROUTE_ABOUT, ROUTE_HOME, ROUTE_TEST_RESHADOW];
//# sourceMappingURL=routes.js.map