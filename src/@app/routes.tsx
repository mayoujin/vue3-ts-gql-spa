import Layout from '@/@app/components/layouts/AntDesignLayout/AntDesignLayout'
import { RouterView } from 'vue-router'
export const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => (
      // @ts-ignore
      <Layout
        v-slots={{
          default: (props) => <RouterView {...props} />,
        }}
      ></Layout>
    ),
    redirect: 'home',
  },
]
// # sourceMappingURL=routes.jsx.map
