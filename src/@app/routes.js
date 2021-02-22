import { routes as RickAndMortyModuleRoutes } from '@modules/r-n-m';
import { routes as CommonModuleRoutes } from '@modules/common/routes';
export const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => />,,
        redirect: 'about',
        children: [...CommonModuleRoutes, ...RickAndMortyModuleRoutes],
    },
];
//# sourceMappingURL=routes.js.map