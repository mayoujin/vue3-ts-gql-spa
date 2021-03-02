import { ref } from '@vue/reactivity'
import { Transition } from '@vue/runtime-dom'
//import styled from 'reshadow'

//import stylesShadow from './styles.shadow.css'
import { useBemClassnameBindings } from '@/plugins/bem'

import { Layout /*, Breadcrumb */ } from 'ant-design-vue'
import { AppHeader } from '@ui/organisms'
import { HeaderNavMenu as NavMenu } from '@/@app/components/HeaderNavMenu'
import styles from './styles.module'

import PageHeader, {
  usePageHeaderMetadataReceiver,
} from '@modules/common/PageHeader'

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
      {/*// @ts-ignore*/}
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
