<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NotesComponent from "@/components/NotesComponent.vue";
</script>

<template>
  <div class="container mx-auto">
    <div class="wrapper">
      <HelloWorld msg="You did it!" />



      <div class="container mx-auto">
        <div class="mx-auto px-4 py-6">
          <h1 class="text-3xl text-center font-bold underline p-4">
            NOTES APP
          </h1>
        </div>
      </div>

      <NotesComponent/>



<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
    </div>
  </div>




  <RouterView />
</template>

<style scoped>

</style>
