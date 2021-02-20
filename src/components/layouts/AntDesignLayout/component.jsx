import { ref } from '@vue/reactivity'
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

//export const template = (/*{ title, onContentMetadata }*/) => {
export const template = function () {
  return (
    <Layout {...cn()}>
      <AppHeader {...cn('Header')}>
        {this.title}
        <MainMenu {...cn('MainMenu')} />
      </AppHeader>
      <PageHeader
        title={this.title}
        /*v-model={[title.value, 'title']}*/
        /*sub-title={subtitle.value}*/
        /*breadcrumb={breadcrumb}
         */
        {...cn('PageHeader')}
      />
      <Content {...cn('Content')}>
        <RouterView
          onEjectMetadata={this.onContentMetadata}
          onClick={this.onContentMetadata}
        />
      </Content>
      <Footer {...cn('Footer')}>Footer</Footer>
    </Layout>
  )
}
