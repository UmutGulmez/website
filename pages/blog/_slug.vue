<template>
  <div class="page">
    <div class="container" v-if="article">
      <div class="columns">
        <div class="column is-one-quarter">
          <SidebarLeft :article="article" />
        </div>
        <div class="column">
          <div v-if="$fetchState.pending">
            <h3 class="title is-2 has-text-centered has-text-white">
              Makale yükleniyor.. .
            </h3>
          </div>
          <div v-else-if="$fetchState.error">
            <h3 class="title is-2 has-text-centered has-text-white">
              Makale yüklenemedi!
            </h3>
          </div>
          <Article v-else :article="article" />
          <hr />
          <div class="title is-3 has-text-centered mt-6 mb-4">
            Sabitlenmiş Yazılar
          </div>
          <PinnedBlogs :isHalf="false" :count="2" />
          <center>
            <Socials />
          </center>
        </div>
        <div
          class="column is-one-quarter is-hidden-tablet-only is-hidden-desktop-only"
        >
          <SidebarRight />
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import SidebarLeft from '~/components/blog/SidebarLeft.vue'
import SidebarRight from '~/components/blog/SidebarRight.vue'
import Article from '~/components/blog/Article.vue'
import PinnedBlogs from '~/components/blog/PinnedBlogs.vue'
import Socials from '~/components/Socials.vue'

export default {
  data() {
    return {
      slug: this.$route.params.slug,
      article: {},
    }
  },
  components: {
    SidebarLeft,
    SidebarRight,
    Article,
    PinnedBlogs,
    Socials,
  },
  async fetch() {
    const slug = this.slug
    const article = await this.$content('articles', slug).fetch()
    this.article = article
  },
  head() {
    return {
      title: this.article.title,
    }
  },
  layout: 'blog',
}
</script>


<style lang="scss" scoped>
</style>