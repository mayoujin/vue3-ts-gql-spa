import styled from 'reshadow'

import { useEmitMetadata } from '@/tools'
import { metadata } from './config'

// @ts-ignore
import styles from './styles.shadow.pcss'

const setup: SetupFunction<{}, RenderFunction> = (_, context) => {
  useEmitMetadata(metadata, context)

  return () =>
    styled(styles)(
      <component role="menu">
        <blue rel="some">Text should be blue</blue>
        <green class="my-class">Text should be green</green>
      </component>,
    )
}

export default {
  setup,
}
