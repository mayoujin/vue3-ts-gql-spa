<template lang="htm">
<div class="blog">
  <p class="date">20 Nov 2020</p>
  <div class="title">
    <div class="tw-b42cd24b">
      <a
        href="/"
        aria-label="Article"
        class="hover:text-deep-purple-accent-700 tw-318b5f57"
      >
        The quick, brown fox jumps over a lazy dog
      </a>
    </div>
    <p class="tw-bac5001c">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque rem aperiam, eaque ipsa quae.
    </p>
  </div>
  <div class="tw-9f9bac42">
    <a href="/" aria-label="Author" class="tw-2621ba2e">
      <img
        alt="avatar"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        class="tw-6523ba7d"
      />
    </a>
    <div>
      <a
        href="/"
        aria-label="Author"
        class="hover:text-deep-purple-accent-700 tw-3b960d91"
        >Vasile Melinte</a
      >
      <p class="tw-2fdbfa09">Author</p>
    </div>
  </div>
  <div class="footer">
    <a
      href="/"
      aria-label=""
      class="text-deep-purple-accent-400 hover:text-deep-purple-800 tw-ef125fa5"
      >Read more</a
    >
  </div>
</div>
</template>

<script>
import { Teleport } from '@vue/runtime-core'

export default {
  components: {
    Teleport,
  },
  setup () {},
  computed: {
    isModified () {
      return true
    },
  },
}
</script>

<style src="./styles.module" lang="postcss" module></style>
