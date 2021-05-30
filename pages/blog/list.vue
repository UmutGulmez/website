<template>
  <div class="page">
    <div class="container">
      <div>
        <h1 class="title is-2 has-text-white has-text-centered">
          List of blogs by Umut.py
        </h1>
        <FilteredBlogs />
      </div>
    </div>
  </div>
</template>

<script>
import FilteredBlogs from '~/components/blog/FilteredBlogs.vue'
import Blogs from '~/components/blog/Blogs.vue'

export default {
  components: {
    FilteredBlogs,
    Blogs,
  },
  layout: 'blog',
}
</script>


<style lang="scss" scoped>
.container {
  margin-bottom: 5rem;
}
</style>