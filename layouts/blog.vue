<template>
  <div class="page">
    <NavbarBlog />
    <div class="wrapper">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavbarBlog from '~/components/common/NavbarBlog.vue'
import Footer from '~/components/common/Footer.vue'

export default {
  components: {
    NavbarBlog,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
.page {
  background-color: var(--color-secondary);
  scroll-behavior: smooth;
}
</style>
