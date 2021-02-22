import { RouteRecordRaw } from 'vue-router'

import Layout from '@/@app/components/layouts/AntDesignLayout'
import { RouterView } from 'vue-router'

export const routes: RouteRecordRaw[] = [
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
    redirect: 'home',
  },
]
