<template>
  <div>
    <nuxt-link class="back-to-blog is-hidden-touch" to="/blog">
      <i class="fas fa-arrow-left"></i> Geri Dön
    </nuxt-link>
    <center class="is-hidden-desktop">
      <nuxt-link class="back-to-blog" to="/blog">
        <i class="fas fa-arrow-left"></i> Geri Dön
      </nuxt-link>
    </center>
    <div class="box article-info-box">
      <p class="title is-6 has-text-white has-text-centered">Yazı Bilgileri</p>
      <div class="level">
        <div class="level-left">
          <p class="heading">Yazan:</p>
        </div>
        <div class="level-right">
          <p class="heading">Umut.py</p>
        </div>
      </div>
      <div class="level">
        <div class="level-left">
          <p class="heading">Paylaşılma Tarihi:</p>
        </div>
        <div class="level-right">
          <p class="heading">{{ beautifyDate(article.createdAt) }}</p>
        </div>
      </div>
      <div class="level">
        <div class="level-left">
          <p class="heading">Son Güncellenme:</p>
        </div>
        <div class="level-right">
          <p class="heading">{{ beautifyDate(article.updatedAt) }}</p>
        </div>
      </div>
      <br />
      <p class="title is-6 has-text-white has-text-centered">Yazı Etiketleri</p>
      <p class="tags">
        <nuxt-link
          :to="'/blog/list?tag=' + tag"
          v-for="tag in article.tags"
          :key="tag"
          class="tag"
        >
          {{ tag }}
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article'],
  methods: {
    beautifyDate(utc) {
      var date = this.$moment(utc).format('DD-MM-YYYY')

      return date
    },
  },
}
</script>

<style lang="scss" scoped>
.back-to-blog {
  font-size: 1.5rem;
  & i {
    font-size: 1.75rem;
    padding: 5px;
  }
}

.box {
  width: 90%;
  background-color: var(--color-third);
  margin: 25px 0;
}

.tag {
  background-color: var(--color-first);
  color: var(--text-secondary);
}

.level:not(:last-child) {
  margin-bottom: 0.85rem;
}
</style>