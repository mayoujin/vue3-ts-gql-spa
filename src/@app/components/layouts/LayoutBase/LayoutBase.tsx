import { Transition, defineComponent } from 'vue'

import { useBemPropBindings } from '@/tools/bem'

import { Layout } from '@ui'
import { AppHeader } from '@app/components/organisms'
import NavMenu from '@app/components/organisms/AppHeaderMenu'

import PageHeader, {
  usePageHeaderMetadataReceiver,
} from '@app/components/organisms/PageHeader'

import { useMetadata } from '@app/components/layouts/LayoutBase/composable'

import styles from './styles.module.pcss'

const { Content, Footer } = Layout

const cn = useBemPropBindings(styles)

/**
 *
 * @param _
 * @param context
 */
const Component: SetupFunction<{}, RenderFunction> = (_, context) => {
  const { metadataRef, onMetadataEmitted } = useMetadata()
  const {
    slots: { default: slot },
  } = context
  const pageHeaderProps = usePageHeaderMetadataReceiver(metadataRef)

  return () => (
    <Layout {...cn()}>
      <AppHeader {...cn('AppHeader')}>
        <NavMenu {...cn('NavMenu')} />
      </AppHeader>
      <PageHeader {...pageHeaderProps.value} {...cn('PageHeader')} />
      <Content {...cn('Content')}>
        <Transition
          name="slide-fade"
          v-slots={{
            default: () => slot({ onMetadataEmitted }),
          }}
        />
      </Content>
      <Footer {...cn('Footer')}></Footer>
    </Layout>
  )
}

export default defineComponent(Component)
