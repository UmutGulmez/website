<template>
  <b-navbar wrapper-class="container">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        umutdev.xyz
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item> Home </b-navbar-item>
      <a href="https://medium.com/@umut.py" target="_blank" class="navbar-item">
        Blog
      </a>
    </template>
  </b-navbar>
</template>


<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: var(--color-secondary);
  padding: 10px 0;
}

a {
  color: var(--text-secondary);
  &:hover {
    color: var(--text-first);
  }
  &.navbar-item:hover {
    background-color: var(--color-first);
  }
}

.navbar-item {
  padding: 0.7rem 2rem;
  &:hover {
    background-color: var(--color-third) !important;
  }
}
</style>