/* eslint-disable no-undef */
//import styled, { use, css } from 'reshadow'
//import styles from './styles.shadow.css'
import styles from './styles.module'

import { Layout, Breadcrumb, PageHeader } from 'ant-design-vue'
import { RouterView } from 'vue-router'
import { AppHeader } from '@ui/organisms'

import { useBemClassnameBindings } from '@/plugins/bem'
import MainMenu from '@modules/common/menu/Menu'

const { Content, Footer } = Layout

const cn = useBemClassnameBindings(styles)

export const template = () => {
  return () => (
    <Layout {...cn()}>
      <AppHeader {...cn('Header')}>
        <MainMenu {...cn('MainMenu')} />
      </AppHeader>
      <PageHeader
        title={`title`}
        /*breadcrumb={breadcrumb}
        sub-title={subtitle}*/
        {...cn('PageHeader')}
      />
      <Content {...cn('Content')}>
        <RouterView onClick={() => alert()} />
      </Content>
      <Footer {...cn('Footer')}>Footer</Footer>
    </Layout>
  )
}
