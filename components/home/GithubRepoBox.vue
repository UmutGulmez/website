<template>
  <a :href="url" target="_blank">
    <div class="box repoBox">
      <a :href="url" class="title is-4 mb-1">
        <RepoIcon />
        {{ name }}
      </a>
      <p class="descriptipon content mb-1">
        {{ desc }}
      </p>
      <div class="bottom mt-4">
        <div class="level is-mobile">
          <div class="level-left">
            <div class="content lang">
              <i :class="'fab fa-' + faLang"></i> {{ lang }}
            </div>
          </div>
          <div class="level-right starCount">
            <div class="content">
              <i class="far fa-star"></i> {{ starCount }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import RepoIcon from '@/assets/images/repoIcon.svg?inline'

export default {
  data() {
    return {
      faLang: '',
    }
  },
  props: ['name', 'desc', 'starCount', 'lang', 'url'],
  mounted() {
    this.faLang = this.lang
      .replace('Vue', 'vuejs')
      .replace('HTML', 'html5')
      .replace('TypeScript', '')
  },
  components: {
    RepoIcon,
  },
}
</script>

<style lang="scss" scoped>
.repoBox {
  background-color: var(--color-secondary);
  &:hover {
    transform: translateY(-3px);
    transition: 0.4s;
  }
}

a.title {
  color: var(--text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  &:hover {
    color: var(--text-first);
  }
}

.descriptipon {
  color: var(--text-secondary);
  height: 48px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.lang,
.starCount {
  color: var(--text-third);
  font-size: 1rem;
}

.fa-star {
  color: gold;
  font-size: 100%;
}
</style>