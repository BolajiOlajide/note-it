<script lang="ts">
import { defineComponent } from "vue"

import Header from "../components/Header.vue"

export default defineComponent({
  setup() {
    return {
      content: '# ',
      title: ''
    }
  },
  components: {
    Header,
  },

  mounted() {
    const textAreaEl = this.$refs.textAreaEl as HTMLTextAreaElement
    textAreaEl.focus()
  },
})
</script>

<template>
  <Header />
  <textarea placeholder="Untitled" class="note__content" ref="textAreaEl" :value="content"></textarea>
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
}

.note__content::placeholder {
  font-size: 0.875rem;
  font-weight: 700;
}
</style>
