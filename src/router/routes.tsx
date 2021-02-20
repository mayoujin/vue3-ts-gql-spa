import { RouteRecordRaw } from 'vue-router'
import { routes as RickAndMortyModuleRoutes } from '@modules/r-n-m'
import { routes as CommonModuleRoutes } from '@modules/common/routes'

import Layout from '@/components/layouts/AntDesignLayout'
import { RouterView } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: () => (
      <Layout
        v-slots={{
          default: (props) => <RouterView {...props} />,
        }}
      ></Layout>
    ),
    redirect: 'about',
    children: [...CommonModuleRoutes, ...RickAndMortyModuleRoutes],
  },
]
