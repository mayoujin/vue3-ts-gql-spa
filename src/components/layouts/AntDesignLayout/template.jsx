import { defineComponent, onMounted, watch } from '@vue/runtime-core'
import { ref } from '@vue/reactivity'
/* eslint-disable no-undef */
//import styled, { use, css } from 'reshadow'
//import styles from './styles.shadow.css'
import styles from './styles.module'

import { Layout, Breadcrumb } from 'ant-design-vue'
import { RouterView } from 'vue-router'
import { AppHeader } from '@ui/organisms'

import { useBemClassnameBindings } from '@/plugins/bem'
import MainMenu from '@modules/common/menu/Menu'

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

export default defineComponent({
  setup(props, context) {
    const { metadataRef, onMetadataEmitted } = useMetadata()
    const { props: pageHeaderProps } = usePageHeaderMetadataReceiver(
      metadataRef,
    )

    return () => (
      <Layout {...cn()}>
        <AppHeader {...cn('Header')}>
          <MainMenu {...cn('MainMenu')} />
        </AppHeader>
        <PageHeader {...pageHeaderProps.value} {...cn('PageHeader')} />
        <Content {...cn('Content')}>
          {context.slots.default({
            onMetadataEmitted,
          })}
        </Content>
        <Footer {...cn('Footer')}>Footer</Footer>
      </Layout>
    )
  },
})
