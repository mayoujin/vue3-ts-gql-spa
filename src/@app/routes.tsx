import Layout from '@/@app/components/layouts/AntDesignLayout/AntDesignLayout'
import { RouterView } from 'vue-router'
// @ts-ignore
export const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => (
      // @ts-ignore
      <Layout
        v-slots={{
          // @ts-ignore
          default: (props) => <RouterView {...props} />,
        }}
      ></Layout>
    ),
    redirect: 'home',
  },
]
// # sourceMappingURL=routes.jsx.map
