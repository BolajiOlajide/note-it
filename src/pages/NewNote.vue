<script lang="ts">
import { ref, onMounted } from "vue";
import debounce from "lodash.debounce";
import store from "../data.json";
import { generateNoteID } from "../utils/id";
import Header from "../components/Header.vue";

export default {
  setup() {
    const noteID = generateNoteID();
    const textAreaEl = ref<null | HTMLTextAreaElement>(null);
    const title = ref("");
    const content = ref("# ");
    const timeout = ref<undefined | number>(undefined);

    const saveContent = (e: Event) => {
      clearTimeout(timeout.value);
      timeout.value = setTimeout(() => {
        content.value = e?.target?.value
        submitNote()
      }, 500);
    };

    const submitNote = () => {
      const note = {
        "id": noteID,
        "url": window.location.href,
        "title": "Something fresh!",
        "content": content.value,
        "updatedAt": Date.now(),
        "faviconUrl": `${window.location.origin}/favicon.ico`
      }
      store.notes.push(note);
      console.log(note)
    }

    onMounted(() => {
      textAreaEl.value?.focus();
    });

    return {
      textAreaEl,
      saveContent,
      content,
      title,
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
  <textarea placeholder="Untitled" class="note__content" ref="textAreaEl" :value="content" @input="saveContent" />
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
