import styled from 'reshadow'

import About from '@modules/common/pages/About'

import { useEmitMetadata } from '@/tools'
import { metadata } from './config'

import styles from './styles.shadow.pcss'

export default {
  setup (props, context) {
    useEmitMetadata(metadata, context)

    return () =>
      styled(styles)(
        <component role="menu">
          <blue rel="some">Text should be blue</blue>
          <green class="my-class">Text should be green</green>
          <input type="text" />
          <About />
        </component>,
      )
  },
}
