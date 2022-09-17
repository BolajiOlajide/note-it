<template>
  <header class="header">
    <h3>Note it</h3>

    <section>
      <button class="icon search-icon"></button>
      <button class="icon write-icon"></button>
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

  .icon {
    height: 1rem;
    background-repeat: no-repeat !important;
    cursor: pointer;
    outline: none;
    border: 0;
    width: 1rem;
  }

  .icon:not(:last-child) {
    margin-right: 0.5rem;
  }

  .search-icon {
    background: url('../assets/img/search.svg');
  }

  .write-icon {
    background: url('../assets/img/write.svg');
  }
</style>
