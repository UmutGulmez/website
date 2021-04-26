<template>
  <div class="container">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          umutdev.xyz
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item> Ana Sayfa </b-navbar-item>
        <b-navbar-item> Projeler </b-navbar-item>
        <b-navbar-item> İletişim </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>


<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: var(--color-first);
  padding: 8px 0;
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
</style>