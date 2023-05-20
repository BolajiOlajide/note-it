<script lang="ts">
import { ref, onMounted } from "vue";
import { nanoid } from "nanoid";
import debounce from "lodash.debounce";

import { generateNoteID } from "../utils/id";
import Header from "../components/Header.vue";

export default {
  setup() {
    const noteID = generateNoteID();
    const textAreaEl = ref<null | HTMLTextAreaElement>(null);

    const saveContent = (e: Event) => {
      console.log(e.target, "<=====");
    };

    onMounted(() => {
      textAreaEl.value?.focus();
    });
    return {
      textAreaEl,
      saveContent,
      content: "# ",
      title: "",
      noteID,
    };
  },
  components: {
    Header,
  },
};
</script>

<template>
  <Header :title="title" />
  <textarea placeholder="Untitled" class="note__content" ref="textAreaEl" :value="content" @change="saveContent" />
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
