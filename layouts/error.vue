<template>
  <div>
    <div class="container wrapper">
      <div class="columns">
        <div class="column is-half">
          <p class="title has-text-white">404</p>
          <p class="subtitle has-text-white">Not Found!</p>
          <nuxt-link to="/"> Redirect to Home </nuxt-link>
        </div>
        <div class="column is-half">
          <center>
            <img
              class="notfound-image"
              src="https://media2.giphy.com/media/WQOIEQRgiK722l3PQT/giphy.gif?cid=790b761114885a46a74f636cb3c5033e0935984fc71e793f&rid=giphy.gif&ct=g"
              alt="umutdev.xyz 404 not found image"
              draggable="false"
            />
          </center>
        </div>
      </div>
    </div>

    <div class="is-hidden-touch">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '~/components/common/Footer.vue'

export default {
  components: {
    Footer,
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 10rem 0;
}

.title {
  font-size: 13rem;
}

.subtitle {
  font-size: 6rem;
}

.notfound-image {
  border-radius: 15px;
  opacity: 0.4;
}

a {
  font-size: 2rem;
}

@media only screen and (max-width: 1344px) {
  .title {
    font-size: 6rem;
  }
  .subtitle {
    font-size: 4rem;
  }
}

.wrapper {
  min-height: calc(100vh - 100px);
}
</style>