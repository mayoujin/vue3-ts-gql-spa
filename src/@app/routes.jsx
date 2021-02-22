import { Transition } from '@vue/runtime-dom'
import Layout from '@/@app/components/layouts/AntDesignLayout'
import { RouterView } from 'vue-router'

export const routes = [
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
//# sourceMappingURL=routes.jsx.map
