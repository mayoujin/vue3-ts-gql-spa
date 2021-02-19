<template lang="htm">
<header bem:b="header" bem:type="css-module">
  <wrapper>
    <start-slot>
      <slot name="start"></slot>
    </start-slot>
    <center-slot>
      <slot></slot>
    </center-slot>
    <end-slot></end-slot>
  </wrapper>
</header>
</template>

<script>
export default {
  components: {},
}
</script>

<style src="./styles.module" lang="postcss" module></style>
