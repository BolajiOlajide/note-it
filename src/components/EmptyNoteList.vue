<script lang="ts">
import { defineComponent } from 'vue'
import WriteIcon from './Icons/WriteIcon.vue';

export default defineComponent({
  components: {
    WriteIcon
  },
  name: 'EmptyNoteList',
})
</script>


<template>
  <div class="list__empty_state">
    <div></div>
    <p class="list__empty_state_text">Let’s start by creating a new note</p>
    <a href="/note" class="list__add_btn">
      <write-icon />
      <span>
        Add new
      </span>
    </a>
  </div>
</template>

<style scoped>
.list__add_btn {
  display: flex;
  padding: 0.5rem 1rem;
  color: var(--black);
  background: var(--white);
  border-radius: 1.5rem;
  outline: 0;
  text-decoration: none;
  width: 5.25rem;
  height: 1.8125rem;
   font-weight: 500;
  font-size: 0.625rem;
  line-height: 0.8125rem;
  align-self: flex-end;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
  
}
.list__add_btn svg {
  margin-right: 9.5px;
}
.list__add_btn::before {
  content: url("../assets/img/down_squiggly_rrow.svg");
  position: absolute;
  top: -8rem;
  left: -4rem;
  color: red;
}

.list__empty_state {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
}

.list__empty_state_text {
  width: 11rem;
  text-align: center;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.3rem;
}
</style>
