<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
  <div class="container mx-auto p-4">
    <h1>This is an about page</h1>
    <nav class="mt-20 flex justify-end">
      <RouterLink to="/">
      <span  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-neutral-300 rounded-lg hover:bg-neutral-400 focus:ring-4 focus:outline-none">
      Go to home page
      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </span>
      </RouterLink>
    </nav>
  </div>
</template>

<style>

</style>
