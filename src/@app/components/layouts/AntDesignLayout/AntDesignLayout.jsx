import { ref, Transition } from 'vue'

// import styled from 'reshadow'

// import stylesShadow from './styles.shadow.css'
import { useBemClassnameBindings } from '@/plugins/bem'

import { Layout /*, Breadcrumb */ } from '@ui'
import { AppHeader } from '@app/components/organisms'
import { HeaderNavMenu as NavMenu } from '@app/components/organisms/HeaderNavMenu'
import styles from './styles.module.pcss'

import PageHeader, {
  usePageHeaderMetadataReceiver,
} from '@app/components/organisms/PageHeader'

const { Content, Footer } = Layout

const cn = useBemClassnameBindings(styles)

const useMetadata = function () {
  const metadataRef = ref({})

  const onMetadataEmitted = (metadata) => {
    metadataRef.value = metadata
  }

  return {
    metadataRef,
    onMetadataEmitted,
  }
}

/**
 *
 * @param _
 * @param context
 */
const Component = (_, context) => {
  const { metadataRef, onMetadataEmitted } = useMetadata()
  const { slots } = context
  const pageHeaderProps = usePageHeaderMetadataReceiver(metadataRef)
  return () => (
    <Layout {...cn()}>
      {/* // @ts-ignore */}
      <AppHeader {...cn('Header')}>
        <NavMenu {...cn('NavMenu')} />
      </AppHeader>
      <PageHeader {...pageHeaderProps.value} {...cn('PageHeader')} />
      <Content {...cn('Content')}>
        <Transition name="slide-fade">
          {slots.default({
            onMetadataEmitted,
          })}
        </Transition>
      </Content>
      <Footer {...cn('Footer')}>Footer</Footer>
    </Layout>
  )
}

export default {
  setup: Component,
}
