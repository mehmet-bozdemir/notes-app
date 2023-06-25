<script setup lang="ts">
import { ref } from "vue";
import { useMainStore, Note } from "@/store";
import {RouterLink} from "vue-router";

// get the store
const mainStore = useMainStore();


// ref for holding form values
const item = ref({ name: "", body: ""});

/**
 * - gets values from form
 * - calls method on store to add student
 * - clears form values
 */
const addNote = () => {
  const { name, body } = item.value;
  if (item.value.name.length === 0 || item.value.body.length === 0) {
    return
  }
  mainStore.addNote(item.value);
  item.value = { name: "", body: "" };
};

/**
 * - sets store property selectedNote
 * - updates input form fields with values
 */
const setSelectedNote = (note: Note) => {
  mainStore.selectedNote = note;
  item.value = { ...mainStore.selectedNote };
};

/**
 * - gets form values
 * - gets id from selectedNote
 * - calls updateNote method on store
 */
const updateNote = () => {
  const { name, body } = item.value;
  const id = mainStore.selectedNote?.id || "";
  mainStore.updateNote({ ...item.value, id });
  item.value = { name: "", body: "" };
};

</script>

<template>
  <div v-if="mainStore.selectedNote === null">
    <input v-model="item.name" type="text" id="base-input" class="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of your note">

    <textarea v-model="item.body" id="message" rows="4" class="my-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a note..."></textarea>

    <div class="flex items-center justify-center"><button @click="addNote" class="my-2 rounded-full bg-neutral-500 p-2 w-full sm:w-1/4 text-white font-semibold hover:opacity-80 transition-in-out duration-150">Publish note</button></div>
  </div>

  <div v-else>
    <input v-model="item.name" type="text" id="base-input" class="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of your note">

    <textarea v-model="item.body" id="message" rows="4" class="my-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a note..."></textarea>

    <div class="flex items-center justify-center my-2 gap-2">
      <button @click="updateNote" class="rounded-full bg-neutral-500 p-2  text-white w-1/4 font-semibold hover:opacity-80 transition-in-out duration-150">Update</button>
      <button @click="mainStore.selectedNote = null" class="rounded-full bg-neutral-500 p-2  text-white w-1/4 font-semibold hover:opacity-80 transition-in-out duration-150">Cancel</button>
    </div>
  </div>

  <div class="flex items-center justify-center my-2"><span class="my-2 rounded-full bg-neutral-500 p-2 w-full sm:w-1/4 text-white font-semibold text-center">Number of notes: {{ mainStore.notes.length }}</span></div>

  <div v-if="mainStore.notes">
    <div v-for="(item, index) in mainStore.notes" :key="index"
         class="flex justify-between items-center p-2 my-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div class="flex w-9/12">
        <div :class="item.completed ? 'line-through' : ''"><p>{{ item.body }}</p> </div>
      </div>
      <div class="flex items-center justify-between w-3/12 gap-2">
        <button class="rounded-full bg-neutral-400 p-1 w-[80px]" @click.stop="mainStore.toggleNote(item, item.id)">
          <span v-if="!item.completed">Read</span>
          <span v-else>Undo</span>
        </button>
        <button class="rounded-full bg-neutral-300 p-1 w-[120px] text-gray-800 font-semibold" @click.stop="setSelectedNote(item)">
          Edit
        </button>
        <button class="rounded-full bg-neutral-300 p-1 w-[120px] text-gray-800 font-semibold" @click.stop="mainStore.removeNote(item.id)">
          Delete
        </button>
      </div>
    </div>
  </div>

  <nav class="mt-20 flex justify-end">
    <RouterLink to="/about">
      <span  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-neutral-300 rounded-lg hover:bg-neutral-400 focus:ring-4 focus:outline-none">
      About page
      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </span>
    </RouterLink>
  </nav>

</template>

<style scoped></style>
