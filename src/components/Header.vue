<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
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
      <router-link :to="{ name: 'home' }">Note it</router-link>

      <section class="icon__container">
        <button class="icon search-icon"></button>
        <router-link class="icon write-icon" :to="{ name: 'new-note' }">
        </router-link>
      </section>
    </template>

    <template v-else>
      <section class="header__not_home_container">
        <router-link :to="{ name: 'home' }">
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.65017 10.2873C6.80479 10.4435 6.89153 10.6544 6.89153 10.8741C6.89153 11.0939 6.80479 11.3048 6.65017 11.4609C6.57424 11.538 6.48374 11.5993 6.38392 11.6411C6.28411 11.6829 6.17698 11.7044 6.06877 11.7044C5.96056 11.7044 5.85343 11.6829 5.75362 11.6411C5.6538 11.5993 5.5633 11.538 5.48737 11.4609L0.891369 6.77135C0.736961 6.61483 0.650391 6.40381 0.650391 6.18395C0.650391 5.96409 0.736961 5.75307 0.891369 5.59655L5.48737 0.906948C5.5633 0.829849 5.6538 0.768621 5.75362 0.726828C5.85343 0.685036 5.96056 0.663513 6.06877 0.663513C6.17698 0.663513 6.28411 0.685036 6.38392 0.726828C6.48374 0.768621 6.57424 0.829849 6.65017 0.906948C6.80479 1.06311 6.89153 1.27399 6.89153 1.49375C6.89153 1.71351 6.80479 1.92439 6.65017 2.08055L2.88097 6.18575L6.65017 10.2873Z"
              fill="white"
            />
          </svg>
        </router-link>
        <span class="header__title">{{ title }}</span>
      </section>
      <router-link :to="{ name: 'home' }">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.00954 8.18263L5.8049 4.97798L9.00954 1.77334L9.00965 1.77344L9.01216 1.7705C9.09317 1.67592 9.13549 1.55424 9.13069 1.4298C9.12588 1.30537 9.07429 1.18732 8.98624 1.09926C8.89818 1.01121 8.78014 0.959619 8.6557 0.954813C8.53126 0.950006 8.40958 0.992334 8.315 1.07334L8.3149 1.07322L8.31216 1.07596L5.10754 4.28058L1.9029 1.07154L1.90301 1.07143L1.90004 1.06889C1.80545 0.987889 1.68378 0.945562 1.55934 0.950369C1.4349 0.955175 1.31686 1.00676 1.2288 1.09482C1.14074 1.18288 1.08916 1.30092 1.08435 1.42536C1.07954 1.5498 1.12187 1.67147 1.20287 1.76606L1.20276 1.76615L1.20547 1.76887L4.41014 4.97793L1.2024 8.18128C1.15132 8.22538 1.1098 8.27946 1.08041 8.34022C1.05073 8.40156 1.03405 8.46838 1.03142 8.53647C1.02879 8.60457 1.04027 8.67247 1.06512 8.73592C1.08998 8.79937 1.12769 8.857 1.17587 8.90518C1.22406 8.95337 1.28169 8.99107 1.34514 9.01593C1.40859 9.04079 1.47649 9.05226 1.54458 9.04963C1.61268 9.047 1.67949 9.03032 1.74084 9.00065C1.80158 8.97126 1.85566 8.92975 1.89975 8.87869L5.10749 5.67533L8.31216 8.88L8.31206 8.88011L8.315 8.88263C8.40958 8.96363 8.53126 9.00595 8.6557 9.00115C8.78014 8.99634 8.89818 8.94476 8.98624 8.8567C9.0743 8.76864 9.12588 8.6506 9.13069 8.52616C9.13549 8.40172 9.09317 8.28005 9.01216 8.18546L9.01228 8.18536L9.00954 8.18263Z"
            fill="white"
            stroke="white"
            stroke-width="0.1"
          />
        </svg>
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

.search-icon {
  background: url("../assets/img/search.svg");
}

.write-icon {
  background: url("../assets/img/write.svg");
}
</style>
