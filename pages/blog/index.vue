<template>
  <div class="page">
    <div class="container">
      <div>
        <h1 class="title is-2 has-text-white has-text-centered">
          Umut.py's Blog
        </h1>
        <h2 class="title is-3 has-text-white">Pinned Blogs</h2>
        <PinnedBlogs :isHalf="true" :count="4" />

        <h2 class="title is-3 has-text-white">All Blogs</h2>
        <Blogs />
        <div class="my-6"></div>
        <FilterByTagBox />
      </div>
    </div>
  </div>
</template>

<script>
import PinnedBlogs from '~/components/blog/PinnedBlogs.vue'
import Blogs from '~/components/blog/Blogs.vue'
import FilterByTagBox from '~/components/blog/FilterByTagBox.vue'

export default {
  components: {
    PinnedBlogs,
    Blogs,
    FilterByTagBox,
  },
  layout: 'blog',
}
</script>


<style lang="scss" scoped>
.container {
  margin-bottom: 5rem;
}
</style>