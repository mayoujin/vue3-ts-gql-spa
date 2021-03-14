/**
 * Global JS Libs, Vue Utils, Helpers, Plugins
 */
import styled, { use } from 'reshadow'
import { defineComponent, ref, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

/**
 * Global UI
 */
import { Menu } from '@ui'

/**
 * component stuff
 */
import { MenuItemsList } from './config'

import styles from './styles.shadow.pcss'

/**
 * Service and helpers builds, inits
 */
const { Item: MenuItem } = Menu

const useActiveMenuStyles = () => {
  const currentRoute = useRoute()
  const selectedKeys = ref([currentRoute.matched[1].name])

  const reactiveMenuItemProps = (route) => {
    return computed(() => {
      return {
        ...use({
          active: selectedKeys.value.includes(route.name.toString()),
        }),
      }
    })
  }

  return {
    reactiveMenuItemProps,
    selectedKeys,
  }
}

const Component = () => {
  const {
    selectedKeys,
    reactiveMenuItemProps: styledActiveItemProps,
  } = useActiveMenuStyles()

  return () =>
    styled(styles)(
      <Menu
        theme="dark"
        mode="horizontal"
        v-model={[selectedKeys.value, 'selectedKeys']}
        v-test={['AppHeaderMenu']}
      >
        {MenuItemsList.map(({ title, route }) => (
          <MenuItem
            {...styledActiveItemProps(route).value}
            key={route.name.toString()}
          >
            <RouterLink to={route.path}>{title}</RouterLink>
          </MenuItem>
        ))}
      </Menu>,
    )
}

export default defineComponent(Component)
