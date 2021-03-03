<template>
  <header :class="cn()">
    <div :class="cn('wrapper')">
      <div :class="cn('start-slot')">
        <slot name="start" />
      </div>
      <div :class="cn('center-slot')">
        <slot />
      </div>
      <div :class="cn('end-slot')" />
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style src="./styles.module.pcss" lang="postcss" module></style>
