<template>
  <b-navbar wrapper-class="container">
    <template #brand>
      <b-navbar-item
        tag="router-link"
        class="navbar-brand"
        :to="{ path: '/blog' }"
      >
        umutdev.xyz/blog
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Home
      </b-navbar-item>
    </template>
  </b-navbar>
</template>


<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: var(--color-first);
  padding: 32px 0;
  margin-bottom: 4rem;
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
    transition: all 0.4s;
  }
  &:focus,
  :focus-within {
    transition: all 0.4s;
    color: var(--text-first) !important;
  }
}

.navbar-brand {
  font-size: 1.5rem;
}
</style>