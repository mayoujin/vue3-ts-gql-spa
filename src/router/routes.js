import { routes as RickAndMortyModuleRoutes } from '@modules/r-n-m';
import { routes as CommonModuleRoutes } from '@modules/common/routes';
import Layout from '@/components/layouts/AntDesignLayout';
export const routes = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: 'about',
        children: [...CommonModuleRoutes, ...RickAndMortyModuleRoutes],
    },
];
//# sourceMappingURL=routes.js.map