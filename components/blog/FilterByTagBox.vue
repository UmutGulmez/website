<template>
  <div>
    <div class="box">
      <div class="title is-5">Filter blogs by Tag</div>
      <nuxt-link
        :to="'/blog/list?tag=' + tag"
        v-for="tag in tags"
        :key="tag"
        class="tag"
      >
        {{ tag }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [],
    }
  },
  props: ['isHalf', 'count'],
  async fetch() {
    //http://localhost:3000/_content/articles
    var tags = []
    const onlyTagArticles = await this.$content('articles')
      .only(['tags'])
      .fetch()

    onlyTagArticles.forEach((art) => {
      tags = tags.concat(art.tags)
    })

    this.tags = tags
  },
}
</script>

<style lang="scss" scoped>
.box {
  background-color: var(--color-third);
  border: none;
}

.tag {
  background-color: var(--color-first);
  color: var(--text-secondary);
  margin: 2px 3px;
  height: 2.5rem;
}
</style>