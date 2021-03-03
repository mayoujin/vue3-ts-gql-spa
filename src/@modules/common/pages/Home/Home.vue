<template>
  <div class="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
    <div
      class="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl"
    >
      <div class="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
        <h2
          class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center"
        >
          The quick, brown fox<br class="hidden md:block" />
          jumps over a lazy dog
        </h2>
        <p class="mb-5 text-base text-gray-700 md:text-lg md:text-center">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        </p>
        <div class="mb-10 text-center md:mb-16 lg:mb-20">
          <a
            href="/"
            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
          </a>
        </div>
        <div class="flex flex-col items-center">
          <div class="mb-2 text-sm text-gray-600 md:mb-2">Follow us</div>
          <div class="flex items-center space-x-4">
            <div class="flex items-center">
              <a
                href="/"
                class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              />
            </div>
            <div class="flex items-center">
              <a
                href="/"
                class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              />
            </div>
            <div class="flex items-center">
              <a
                href="/"
                class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              />
            </div>
            <div class="flex items-center">
              <a
                href="/"
                class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0"
    >
      <img
        class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
        src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setup } from './setup'

export default defineComponent({
  setup,
})
</script>

<style src="./styles.module" lang="postcss" module></style>
