<script lang="ts">
import { defineComponent, ref } from 'vue'

import type { Note } from '../interface.d'

import Header from '../components/Header.vue'
import EmptyNoteListVue from '../components/EmptyNoteList.vue'
import NoteListVue from '../components/NoteList.vue'
import store from '../data.json'

export default defineComponent({
  setup() {
    const notes = ref<Note[]>(store.notes)

    return { notes }
  },
  components: {
    EmptyNoteListVue,
    NoteListVue,
    Header
  }
})
</script>

<template>
  <Header />
  <EmptyNoteListVue v-if="notes.length === 0" />
  <NoteListVue v-else :notes="notes" />
</template>


