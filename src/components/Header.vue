<template>
  <header class="header">
    <router-link :to="{ name: 'home' }">Note it</router-link>

    <section class="icon__container">
      <button class="icon search-icon"></button>
      <router-link class="icon write-icon" :to="{ name: 'new-note' }">
      </router-link>
    </section>
  </header>
  <hr class="divider" />
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
