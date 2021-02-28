<template>
  <header :class="cn()">
    <div :class="cn('wrapper')">
      <div :class="cn('start-slot')">
        <slot name="start"></slot>
      </div>
      <div :class="cn('center-slot')">
        <slot></slot>
      </div>
      <div :class="cn('end-slot')"></div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style src="./styles.module.pcss" lang="postcss" module></style>
