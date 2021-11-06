<template>
  <div class="columns is-multiline">
    <div
      :class="isHalf == true ? 'column is-half' : 'column is-full'"
      v-for="article in pinnedArticles"
      :key="article.slug"
    >
      <nuxt-link :to="'/blog/' + article.slug" class="box pinned-blog-box">
        <div class="columns">
          <div class="column is-narrow is-hidden-touch">
            <img
              class="pinned-blog-box-image"
              :src="article.bannerImage"
              :alt="article.title + `'s banner`"
            />
          </div>
          <div class="column">
            <h3 class="title pinned-blog-title is-4 has-text-white">
              {{ article.title }}
            </h3>
            <p class="pinned-blog-description is-hidden-touch">
              {{ article.description }}
            </p>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div
      :class="isHalf == true ? 'column is-half' : 'column is-full'"
      :v-if="pinnedArticles.length < (count || 4)"
      v-for="n in (count || 4) - pinnedArticles.length"
      :key="n"
    >
      <div class="box pinned-blog-box deactive"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      pinnedArticles: [],
    }
  },
  props: ['isHalf', 'count'],
  async fetch() {
    //http://localhost:3000/_content/articles
    const articles = await this.$content('articles').fetch()

    const pinnedArticles = articles
      .filter((article) => article.pinned)
      .slice(0, this.count || 4)
      .sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt)
      })

    this.pinnedArticles = pinnedArticles
  },
}
</script>


<style lang="scss" scoped>
.pinned-blog-box {
  background-color: var(--color-third);
  border-radius: 8px;
  height: 125px;
  &:hover {
    transform: translateY(-3px);
    transition: 0.3s;
  }
  & p {
    color: var(--text-secondary);
  }
  &.deactive {
    background-color: var(--color-third);
    opacity: 0.4;
    &:hover {
      transform: translateY(0px);
      transition: 0.3s;
    }
  }
}

.pinned-blog-box-image {
  border-radius: 8px;
  margin-bottom: 15px;
  width: 85px;
  height: 85px;
  object-fit: cover;
}

h3.title {
  margin-bottom: 1rem;
}

a.box:hover,
a.box:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.pinned-blog-description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.pinned-blog-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>