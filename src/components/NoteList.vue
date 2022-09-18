<script lang="ts">
import { defineComponent, PropType } from "vue";

import type { Note } from "../interface.d";

import { calculateNoteDate } from "../utils/date";

export default defineComponent({
  props: {
    notes: {
      type: Array as PropType<Array<Note>>,
      required: true,
    },
  },
  setup(props) {
    return {
      notes: props.notes,
      calculateNoteDate,
    };
  },
});
</script>

<template>
  <ul class="note__list_container">
    <li v-for="note in notes" :key="note.id" class="note__node">
      <div class="note__details">
        <router-link
          class="note__title"
          :to="{ name: 'note', params: { id: note.id } }"
        >
          {{ note.title }}
        </router-link>
        &nbsp;
        <span class="note__date">{{ calculateNoteDate(note.updatedAt) }}</span>
      </div>

      <img :src="note.faviconUrl" alt="" class="note__icon" />
    </li>
  </ul>
</template>

<style scoped>
.note__list_container {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  overflow-y: auto;
}

.note__node {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.note__node:not(:first-child) {
  margin: 1rem 0;
}

.note__details {
  display: flex;
  height: 100%;
  max-width: calc(100% - 3rem);
}

.note__title {
  font-weight: 450;
  font-size: 0.75rem;
  line-height: 0.8125rem;
  color: var(--white);
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.note__date {
  font-style: normal;
  font-weight: 400;
  font-size: 0.6rem;
  line-height: 0.625rem;
  width: 2.375rem;
  height: 0.625rem;
  color: var(--white);
  opacity: 0.3;
}

.note__icon {
  width: 1.25rem;
  height: 100%;
}
</style>
