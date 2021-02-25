import { ROUTES as COMMON_ROUTES } from '@modules/common/routes';
import { ROUTES as RNM_ROUTES } from '@modules/r-n-m/routes';
export const MenuItemsList = [
    {
        title: 'About',
        route: COMMON_ROUTES.ABOUT,
    },
    {
        title: 'Home',
        route: COMMON_ROUTES.HOME,
    },
    {
        title: 'Reshadow Test',
        route: COMMON_ROUTES.TEST,
    },
    {
        title: 'Rick&Morty',
        route: RNM_ROUTES.ROOT_ROUTE,
    },
];
