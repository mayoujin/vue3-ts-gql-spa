<template>
  <header :class="cn()">
    <div :class="cn('wrapper')">
      <div :class="cn('start-slot')">
        <slot name="start" />
      </div>
      <div :class="cn('center-slot')">
        <slot />
      </div>
      <div :class="cn('end-slot')">
        <slot name="end" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useBem } from '@/tools/bem'

import styles from './styles.module.pcss'
const cn = useBem<string>(styles)

export default defineComponent({
  setup: () => ({
    cn,
  }),
})
</script>
