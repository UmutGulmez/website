<template>
  <div class="banner">
    <div class="columns">
      <div class="column is-3">
        <div class="profile-picture">
          <b-image
            :src="require('@/assets/images/logo.webp')"
            :rounded="true"
            alt="Umut.py profile picture."
            v-if="!loading"
          >
          </b-image>
          <b-skeleton
            circle
            width="215px"
            height="215px"
            v-if="loading"
          ></b-skeleton>
        </div>
      </div>
      <div class="column is-6">
        <div style="margin-top: 1.25rem">
          <h1 class="title is-1 has-text-centered-touch">Umut.py</h1>
          <h2 class="subtitle is-3 has-text-centered-touch">Web Developer</h2>
          <Socials />
        </div>
      </div>
      <div class="column is-3"></div>
    </div>
  </div>
</template>

<script>
import Socials from '~/components/Socials'

export default {
  data() {
    return {
      loading: true,
    }
  },
  components: {
    Socials,
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => {
        this.loading = false
        this.$nuxt.$loading.finish()
      }, 300)
    })
  },
}
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
}

.profile-picture {
  width: 215px;
  margin: 0 auto;
  filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 20px 30px);
}

.subtitle {
  color: var(--text-secondary);
}
</style>