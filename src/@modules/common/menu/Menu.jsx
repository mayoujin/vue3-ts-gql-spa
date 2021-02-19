import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'

import styles from './styles.module'

import { Menu } from 'ant-design-vue'
import { RouterLink } from 'vue-router'

import { useBemClassnameBindings } from '@/plugins/bem'

import { ROUTES as COMMON_ROUTES } from '@modules/common/routes'
import { ROUTES as RNM_ROUTES } from '@modules/r-n-m/routes'

const { Item: MenuItem } = Menu

const cn = useBemClassnameBindings(styles)

const MenuItemsList = [
  {
    title: 'About',
    route: COMMON_ROUTES.ABOUT,
  },
  {
    title: 'Home',
    route: COMMON_ROUTES.HOME,
  },
  {
    title: 'Rick&Morty',
    route: RNM_ROUTES.ROOT_ROUTE,
  },
]

const Item = ({ title, route }, selectedKeys) => {
  debugger
  return (
    <MenuItem
      key={route.name}
      {...cn('MenuItem', { selected: selectedKeys.value.includes(route.name) })}
    >
      <RouterLink to={route.path}>{title}</RouterLink>
    </MenuItem>
  )
}

export default () => {
  const route = useRoute()
  const selectedKeys = ref([route.matched[1].name])
  debugger
  return (
    <Menu
      mode="horizontal"
      theme="dark"
      {...cn()}
      v-model={[selectedKeys.value, 'selectedKeys']}
    >
      {MenuItemsList.map((item) => Item(item, selectedKeys))}
    </Menu>
  )
}
