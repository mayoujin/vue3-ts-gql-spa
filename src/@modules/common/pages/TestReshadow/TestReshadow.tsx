import { defineComponent } from 'vue'
import styled from 'reshadow'

import { useEmitMetadata } from '@/tools'
import { metadata } from './config'

import styles from './styles.shadow.pcss'

const Component: SetupFunction<{}, RenderFunction> = (_, context) => {
  useEmitMetadata(metadata, context)

  return () =>
    styled(styles)(
      <component>
        <green>Text should be green</green>
        <blue>Text should be blue</blue>
      </component>,
    )
}

export default defineComponent(Component)
