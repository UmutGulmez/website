<template>
  <article>
    <h1 class="blog-title">
      <b> {{ article.title }} </b>
    </h1>
    <hr />
    <ArticleInfoBar :article="article" class="is-hidden-touch" />
    <img class="blog-image" :src="article.bannerImage" alt="" />

    <nuxt-content :document="article" />
  </article>
</template>

<script>
import ArticleInfoBar from '@/components/blog/ArticleInfoBar.vue'

export default {
  props: ['article'],
  components: {
    ArticleInfoBar,
  },
}
</script>

<style lang="scss">
.blog-title {
  font-size: 3rem;
  line-height: 4rem;
}

.blog-image {
  border-radius: 8px;
  margin: 2rem auto 2rem auto;
  display: flex;
  &:hover {
    transform: scale(1.005);
    transition: all 0.3s;
  }
}

.nuxt-content {
  & img {
    border-radius: 8px;
    margin: 2rem auto 1rem auto;
    display: flex;
    &:hover {
      transform: scale(1.005);
      transition: all 0.3s;
    }
  }

  & h2 {
    font-weight: bold;
    font-size: 3rem;
  }

  & h2 {
    font-weight: bold;
    font-size: 2.5rem;
  }

  & h3 {
    font-weight: bold;
    font-size: 2rem;
  }

  & h4 {
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--text-secondary);
  }

  & hr {
    background-color: var(--color-secondary);
  }

  & p.image-alt {
    color: var(--text-third);
    font-size: 0.85rem;
    text-align: center;
    margin-bottom: 45px;
  }

  & p.nuxt-content p,
  h1,
  h2,
  h3,
  h4,
  ul,
  p {
    margin-bottom: 1.25rem;
    line-height: 33.1833px;
    & strong {
      color: var(--text-first);
      font-weight: bold;
    }
  }

  & h1,
  h2,
  h3 {
    line-height: 42px !important;
  }

  & ul {
    font-size: 1.25rem;
    color: var(--text-secondary);
  }
}

hr {
  background-color: var(--text-third);
  margin: 1rem 0;
}

.icon.icon-link {
  background-image: url('~assets/images/hashtag.png');
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-size: 1.5rem 1.5rem;
}
</style>

