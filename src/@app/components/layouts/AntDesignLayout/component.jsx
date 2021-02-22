import { ref } from '@vue/reactivity'
import { Transition } from '@vue/runtime-dom'
//import styled, { use, css } from 'reshadow'
//import styles from './styles.shadow.css'
import { useBemClassnameBindings } from '@/plugins/bem'

import { Layout /*, Breadcrumb*/ } from 'ant-design-vue'
import { AppHeader as Header } from '@ui/organisms'
import { HeaderNavMenu as NavMenu } from '@/@app/components/HeaderNavMenu'
import styles from './styles.module'

import PageHeader, {
  usePageHeaderMetadataReceiver,
} from '@modules/common/PageHeader'

const { Content, Footer } = Layout

const cn = useBemClassnameBindings(styles)

const useMetadata = function () {
  const metadataRef = ref({
    __timestamp: Date.now(),
  })

  const onMetadataEmitted = (metadata) => {
    metadataRef.value = metadata
  }

  return {
    metadataRef,
    onMetadataEmitted,
  }
}

export default (props, context) => {
  const { metadataRef, onMetadataEmitted } = useMetadata()
  const { props: pageHeaderProps } = usePageHeaderMetadataReceiver(metadataRef)

  return () => (
    <Layout {...cn()}>
      <Header {...cn('Header')}>
        <NavMenu {...cn('MainMenu')} />
      </Header>
      <PageHeader {...pageHeaderProps.value} {...cn('PageHeader')} />
      <Content {...cn('Content')}>
        <Transition name="slide-fade">
          {context.slots.default({
            onMetadataEmitted,
          })}
        </Transition>
      </Content>
      <Footer {...cn('Footer')}>Footer</Footer>
    </Layout>
  )
}
