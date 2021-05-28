<template>
  <div class="level mb-0">
    <div class="level-left">
      <p class="article-info">
        <i class="fas fa-calendar-alt"></i>
        {{ beautifyDate(article.createdAt) }}
      </p>
      <p class="article-info">
        <i class="fas fa-hourglass-start"></i> {{ article.readingTime }}
      </p>
    </div>
    <div class="level-right">
      <p class="article-info">
        <a
          :href="
            'https://twitter.com/intent/tweet?text=' +
            article.title +
            '!\n www.umutdev.xyz' +
            $router.history.current.path
          "
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a>
          <i class="fas fa-link"></i>
        </a>
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
.article-info {
  font-size: 1rem;
  color: var(--text-third);
  margin-bottom: 0;
  & i {
    font-size: 1.1rem;
    padding: 0 3px;

    color: var(--text-third);
    &:hover {
      color: var(--text-secondary);
    }
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
}
</style>