<script lang="ts">
import { defineComponent } from "vue";
import { nanoid } from 'nanoid'
import debounce from 'lodash.debounce'

import { generateNoteID } from '../utils/id'
import Header from "../components/Header.vue";

export default defineComponent({
  setup() {
    const noteID = generateNoteID()
    return {
      content: "# ",
      title: "",
      noteID
    };
  },
  components: {
    Header,
  },
  mounted() {
    const textAreaEl = this.$refs.textAreaEl as HTMLTextAreaElement;
    textAreaEl.focus();
  },
  methods: {
    saveContent: (e: Event) => {
      console.log(e.target, '<=====')
    }
  },
});
</script>

<template>
  <Header :title="title" />
  <textarea
    placeholder="Untitled"
    class="note__content"
    ref="textAreaEl"
    :value="content"
    @change="saveContent"
  />
</template>

<style scoped>
.note__content {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  font-weight: 300;
  font-size: 0.75rem;
  background: transparent;
  color: var(--text-color);
  outline: none;
  border: 0;
  line-height: 1.25rem;
  resize: none;
  letter-spacing: 0.0625rem;
  font-family: "Euclid Circular A", sans-serif;
}

.note__content::placeholder {
  font-size: 0.875rem;
  font-weight: 700;
}
</style>
