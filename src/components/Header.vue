<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { useRoute } from "vue-router";
import CancelIcon from "./Icons/CancelIcon.vue";

export default defineComponent({
  components: {
    CancelIcon
  },
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const route = useRoute();
    const isHomePage: Ref<boolean> = ref(route.path === "/");

    return {
      title: props.title || "",
      isHomePage,
    };
  },
});
</script>

<template>
  <header class="header">
    <template v-if="isHomePage">
      <router-link class="header-text" :to="{ name: 'home' }">Note it</router-link>

      <section class="icon__container">
        <!-- <router-link class="icon write-icon" :to="{ name: 'new-note' }"></router-link> -->
        <router-link :to="{ name: 'home' }">
          <cancel-icon />
        </router-link>
      </section>
    </template>

    <template v-else>
      <section class="header__not_home_container">
        <router-link :to="{ name: 'home' }">
        </router-link>
        <span class="header__title">{{ title }}</span>
      </section>
      <router-link :to="{ name: 'home' }">
        <cancel-icon />
      </router-link>
    </template>
  </header>
  <hr class="divider" />
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-text {
  font-weight: 700;
  font-size: .9rem;
  line-height: 15px;
}

.header__not_home_container {
  display: flex;
  align-items: center;
}

.header__title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 13rem;
  display: block;
  margin-left: 0.5rem;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;
}

.icon__container {
  display: flex;
  align-items: center;
}

.icon {
  height: 1rem;
  background-repeat: no-repeat !important;
  cursor: pointer;
  outline: none;
  border: 0;
  width: 1rem;
  display: inline-block;
}

.icon:not(:last-child) {
  margin-right: 0.5rem;
}

/* .search-icon {
  background: url("../assets/img/search.svg");
} */

/* .write-icon {
  background: url("../assets/img/write.svg");
} */
</style>
