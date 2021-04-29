<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="banner">
        <div class="columns">
          <div class="column is-3">
            <b-image
              src="https://www.umutdev.xyz/assets/logo-square.webp"
              :rounded="true"
              alt="Umut.py profile picture."
              class="profile-picture"
            >
            </b-image>
          </div>
          <div class="column is-6">
            <div style="margin-top: 1.25rem">
              <h1 class="title is-1 has-text-centered-touch">Umut.py</h1>
              <h2 class="subtitle is-3 has-text-centered-touch">
                Web Deveoper
              </h2>
              <Socials />
            </div>
          </div>
          <div class="column is-3">
            <div class="now-playing-div">
              <NowPlaying />
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <WhoAmIBox />
        </div>
        <div class="column">
          <TechsBox />
        </div>
      </div>
      <div style="margin: 150px 0"></div>
      <Blogs />
      <div style="margin: 150px 0"></div>
      <GithubRepos />
    </div>
    <div style="margin: 150px 0"></div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/common/Navbar'
import Footer from '~/components/common/Footer'
import NowPlaying from '~/components/home/SpotifyNowPlaying'
import Socials from '~/components/Socials'
import TechsBox from '~/components/home/TechsBox'
import WhoAmIBox from '~/components/home/WhoAmIBox'
import Blogs from '~/components/home/Blogs'
import GithubRepos from '~/components/home/GithubRepos'

export default {
  components: {
    Navbar,
    Footer,
    NowPlaying,
    Socials,
    TechsBox,
    WhoAmIBox,
    Blogs,
    GithubRepos,
  },
}
</script>

<style lang="scss" scoped>
.title {
  color: var(--text-first);
}

.banner {
  padding: 100px 0;
}

.profile-picture {
  width: 215px;
  margin: 0 auto;
  filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 20px 30px);
}

a:hover {
  color: #9e9e9e !important;
}

.subtitle {
  color: var(--text-secondary);
}

.middle-column {
  padding: 30px;
}

.blogs {
  margin: 50px 0;
}

.latest-blogs {
  margin-bottom: 0.7rem;
}
</style>