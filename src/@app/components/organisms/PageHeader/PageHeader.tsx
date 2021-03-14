import { defineComponent } from 'vue'
import styled from 'reshadow'
/**
 * Global UI
 */
import { PageHeader } from '@ui'

import styles from './styles.shadow.pcss'

export interface ComponentProps {
  title: string
  'sub-title': string
}

const Component = ({ title, 'sub-title': subtitle }) => {
  return () =>
    styled(styles)(
      <PageHeader title={title} sub-title={subtitle} v-test={['PageHeader']} />,
    )
}

export default defineComponent<ComponentProps>(Component)
