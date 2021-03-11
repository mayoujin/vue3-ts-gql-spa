import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import Layout from '@app/components/layouts/LayoutBase'

export default defineComponent(() => {
  return () => (
    <Layout
      v-slots={{
        default: (props) => <RouterView {...props} />,
      }}
    />
  )
})
