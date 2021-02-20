import styled from 'reshadow'

import About from '@modules/common/pages/About'

import { useEmitMetadata } from '@/tools'
import { metadata } from './config'

import styles from './styles.shadow.pcss'

export default {
  setup(props, context) {
    useEmitMetadata(metadata, context)

    return () =>
      styled(styles)(
        <component>
          <blue>Text should be blue</blue>
          <green>Text should be green</green>
          <About />
        </component>,
      )
  },
}
