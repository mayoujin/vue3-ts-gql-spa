import { routes } from './routes';
import { register as registerEntities } from '@modules/r-n-m/entities';
export const register = ({ router, store }) => {
    routes.forEach((route) => {
        router.addRoute('layout', route);
    });
    registerEntities(store);
};
//# sourceMappingURL=index.js.map