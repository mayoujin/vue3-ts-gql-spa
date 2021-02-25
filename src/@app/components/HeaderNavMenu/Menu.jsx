/**
 * Global JS Libs, Vue Utils, Helpers, Plugins
 */
import { ref } from '@vue/reactivity'
import { useRoute, RouterLink } from 'vue-router'
import { useBemClassnameBindings } from '@/plugins/bem'

/**
 * Global UI
 */
import { Menu } from 'ant-design-vue'

/**
 * Component-level stuff
 */
import { MenuItemsList } from './config'
import styles from './styles.module.pcss'

/**
 * Service and helpers builds, inits
 */
const { Item: MenuItem } = Menu
const cn = useBemClassnameBindings(styles)

/**
 *
 * @param title
 * @param route
 * @param selectedKeys
 * @return {JSX.Element}
 * @constructor
 */
const Item = ({ title, route }, selectedKeys) => {
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
