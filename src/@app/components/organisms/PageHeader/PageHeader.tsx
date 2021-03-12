import { defineComponent } from 'vue'
import styled from 'reshadow'
/**
 * Global UI
 */
import { PageHeader } from '@ui'

import styles from './styles.shadow.pcss'

export type ComponentProps = {
  title: string
  'sub-title': string
}

const Component = ({ title, 'sub-title': subtitle }) => {
  return () => styled(styles)(<PageHeader title={title} sub-title={subtitle} />)
}

export default defineComponent<ComponentProps>(Component)
