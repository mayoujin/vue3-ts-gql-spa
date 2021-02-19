import { RouteRecordRaw } from 'vue-router'
import { routes as RickAndMortyModuleRoutes } from '@modules/r-n-m'
import { routes as CommonModuleRoutes } from '@modules/common/routes'

import Layout from '@/components/layouts/AntDesignLayout'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: 'about',
    children: [...CommonModuleRoutes, ...RickAndMortyModuleRoutes],
  },
]
