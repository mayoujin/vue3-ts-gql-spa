/**
 * Global, Api Types
 */
import { PropType } from 'vue'
import { ComponentPropsOptions } from 'vue'

/**
 * Global JS Libs, Vue Utils, Helpers, Plugins
 */
import { toRefs } from 'vue'

/**
 * Local types, resources
 */
import { ComponentProps, RawBindings } from './types'

/**
 * Component props definition
 */
export const props: ComponentPropsOptions<ComponentProps> = {
  isLoading: Boolean,
  characters: Array as PropType<ComponentProps['characters']>,
}

/**
 * Setup function
 *
 * @param props
 * @param context
 */
export const setup: SetupFunction<ComponentProps, RawBindings> = (
  props,
  context,
) => {
  const { emit } = context
  const { characters, isLoading } = toRefs(props)

  const onAction = ($event, action, ...args) => {
    emit('action', action, args)
  }

  const pagination = {
    onChange: (page: number) => {
      emit('page-changed', page)
    },
  }

  return {
    onAction,
    pagination,
    characters,
    isLoading,
  }
}
