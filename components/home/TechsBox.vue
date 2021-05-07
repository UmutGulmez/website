<template>
  <div class="box bg-color-secondary min-370px-height">
    <p class="heading has-text-centered">Technologies I Use</p>
    <br />
    <div class="columns is-multiline">
      <div class="column is-half">
        <div class="box language">
          <i class="fab fa-js-square language-icon"></i>
          <span class="language-text">JavaScript</span>
        </div>
      </div>
      <div class="column is-half">
        <div class="box language">
          <i class="fab fa-html5 language-icon"></i>
          <span class="language-text">HTML5</span>
        </div>
      </div>
      <div class="column is-half">
        <div class="box language">
          <i class="fab fa-vuejs language-icon"></i>
          <span class="language-text">Vue.js & Nuxt.js</span>
        </div>
      </div>
      <div class="column is-half">
        <div class="box language">
          <i class="fab fa-sass language-icon"></i>
          <span class="language-text">Sass</span>
        </div>
      </div>
      <div class="column is-half">
        <div class="box language">
          <i class="fab fa-node-js language-icon"></i>
          <span class="language-text">Node.js</span>
        </div>
      </div>
      <div class="column is-half">
        <div class="box language">
          <i class="fab fa-python language-icon"></i>
          <span class="language-text">Python</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.language {
  background-color: var(--color-third);
  padding: 15px 20px;
}

.language-icon {
  padding: 0 10px;
}

.language-text {
  color: var(--text-first);
}
</style>