<template>
  <a :href="url" target="_blank">
    <div class="box repoBox">
      <a :href="url" class="title is-4 mb-1">
        <svg
          aria-label="Repository"
          class="octicon octicon-repo flex-shrink-0"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          role="img"
          fill="var(--text-first)"
        >
          <path
            fill-rule="evenodd"
            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
          ></path>
        </svg>
        {{ name }}
      </a>
      <p class="descriptipon content mb-1">
        {{ desc }}
      </p>
      <div class="bottom">
        <div class="level is-mobile">
          <div class="level-left">
            <div class="content lang">
              {{ lang }}
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
export default {
  props: ['name', 'desc', 'starCount', 'lang', 'url'],
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
  &:hover {
    color: var(--text-first);
  }
}

.descriptipon {
  color: var(--text-secondary);
  min-height: 65px;
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