<script lang="ts">
import { defineComponent, PropType } from "vue"

import type { Note } from "../interface.d"

import { calculateNoteDate } from "../utils/date"
import SearchIcon from "./Icons/SearchIcon.vue"
import WriteIcon from "./Icons/WriteIcon.vue"
import MenuIcon from "./Icons/MenuIcon.vue"

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
  components: { SearchIcon, WriteIcon, MenuIcon }
})
</script>

<template>
  <section class="note__list__search">
    <search-icon />
    <input type="text" name="search" placeholder="Search" id="search">
  </section>
  <hr class="divider" />
  <TransitionGroup class="note__list_container" tag="ul" name="slide">
    <div class="note__new">
      <router-link class="icon write-icon" :to="{ name: 'new-note' }">
        <write-icon />
      </router-link>
    </div>
    <li v-for="note in notes" :key="note.id" class="note__node">
      <div class="note__details">
        <router-link class="note__title" :to="{ name: 'note', params: { id: note.id } }">
          {{ note.title }}
        </router-link>
        &nbsp;
        <span class="note__date">{{ calculateNoteDate(note.updatedAt) }}</span>
      </div>
      <div class="note__menu">
        <div>
          <img :src="note.faviconUrl" alt="" class="note__icon" />
        </div>
        <button class="note__menu__btn" type="button">
          <menu-icon />
        </button>
      </div>
    </li>
  </TransitionGroup>
</template>

<style scoped>
.note__list_container {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  overflow-y: auto;
  /* position: relative; */

}

.note__list_container::-webkit-scrollbar {
  display: none;
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
  width: 85%;
}

.note__title {
  font-weight: 450;
  font-size: 0.75rem;
  line-height: 0.8125rem;
  color: var(--white);
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  width: 72%;
  text-overflow: ellipsis;
}

.note__date {
  font-style: normal;
  font-weight: 400;
  font-size: 0.6rem;
  line-height: 0.625rem;
  width: 25%;
  height: 0.625rem;
  color: var(--white);
  opacity: 0.3;
}

.note__menu {
  width: 15%;
  justify-content: space-around;
  display: flex;
  align-items: center;
}

.note__menu__btn {
  background: transparent;
  border: none;
  cursor: pointer;
}

.note__list__search {
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  padding: 0px 24px;
}

.note__list__search input {
  font-size: 12px;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: transparent;
  color: #FFFFFF;
  margin-left: 8.5px;
  padding: 8px 0px;
}

.note__icon {
  position: relative;
  width: 1rem;
  height: 100%;
  object-fit: contain;
  margin: 0 auto;
}

.note__menu div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  background: rgba(236, 234, 234, 0.1);
  border-radius: 100%;
}

.note__new {
  position: absolute;
  width: 32px;
  height: 32px;
  right: 8%;
  bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  background: #FFFFFF;
  z-index: 3;
  /* box-shadow: -73.8434px -4.81226px 203px 254px rgba(255, 255, 255, 0.04), -37.3832px -2.43621px 88.4953px 254px rgba(255, 255, 255, 0.0140625), -14.7687px -0.962453px 32.9875px 254px rgba(255, 255, 255, 0.0245), -3.23065px -0.210537px 11.7359px 254px rgba(255, 255, 255, 0.0326875); */
  border-radius: 37px;
}
</style>