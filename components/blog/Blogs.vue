<template>
  <div class="columns is-multiline">
    <div class="column is-half" v-for="article in articles" :key="article.slug">
      <nuxt-link
        :to="'/blog/' + article.slug"
        :class="
          articles[0] == article
            ? 'box blog-box notification-badge'
            : 'box blog-box'
        "
        draggable="false"
        data-badge="Yeni!"
      >
        <img
          class="blog-box-image"
          :src="article.bannerImage"
          :alt="article.title + `'s banner`"
        />
        <h3 class="title is-4 has-text-white">
          {{ article.title }}
        </h3>
        <p class="blog-description">
          {{ article.description }}
        </p>
      </nuxt-link>
    </div>
    <div
      class="column is-half"
      :v-if="articles.length < 4"
      v-for="n in 4 - (articles.length > 4 ? 4 : articles.length)"
      :key="n"
    >
      <div class="box blog-box deactive"></div>
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

  async fetch() {
    //http://localhost:3000/_content/articles
    const rawArticles = await this.$content('articles').fetch()
    var sortedArticles = rawArticles.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })
    this.articles = sortedArticles
  },
}
</script>


<style lang="scss" scoped>
.blog-box {
  position: relative;
  background-color: var(--color-third);
  border-radius: 8px;
  height: 500px;
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

.blog-box-image {
  border-radius: 8px;
  margin-bottom: 15px;
  width: 100%;
  height: 20rem;
  object-fit: cover;
}

@media only screen and (max-width: 600px) {
  .blog-box-image {
    border-radius: 8px;
    margin-bottom: 15px;
    width: 100%;
    height: 10rem;
    object-fit: cover;
  }
}

h3.title {
  margin-bottom: 1rem;
}

a.box:hover,
a.box:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.blog-description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>