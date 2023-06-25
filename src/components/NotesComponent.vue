<script setup lang="ts">
import { ref } from "vue";
import { useMainStore, Note } from "../store";

// get the store
const mainStore = useMainStore();


// ref for holding form values
const item = ref({ name: "", body: "" });

/**
 * - gets values from form
 * - calls method on store to add student
 * - clears form values
 */
const addNote = () => {
  const { name, body } = item.value;
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
    <input type="text" v-model="item.name" placeholder="name" />
    <input type="text" v-model="item.body" placeholder="section" />
    <div><button @click="addNote">Publish note</button>&nbsp;</div>
  </div>
  <div v-else>
    <input type="text" v-model="item.name" placeholder="name" />
    <input type="text" v-model="item.body" placeholder="section" />
    <div>
      <button @click="updateNote()">Update</button>
      <button @click="mainStore.selectedStudent = null">Cancel</button>
    </div>
  </div>
  <div>Count {{ mainStore.notes.length }}</div>
  <ul>
    <li v-for="(item, index) in mainStore.notes" :key="index">
      <pre>{{ JSON.stringify(item, null, 2) }}</pre>
      <div>
        <button @click="setSelectedNote(item)">Edit</button>&nbsp;
        <button @click="mainStore.removeNote(item.id)">Delete</button>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
