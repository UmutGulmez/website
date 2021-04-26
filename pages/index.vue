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
              <div class="socials has-text-centered-mobile">
                <a
                  href="https://discord.com/users/274615370214670336"
                  target="_blank"
                >
                  <span class="icon social">
                    <center>
                      <i class="fab fa-discord"></i>
                    </center>
                  </span>
                </a>
                <a href="https://github.com/UmutGulmez" target="_blank">
                  <span class="icon social">
                    <center>
                      <i class="fab fa-github"></i>
                    </center>
                  </span>
                </a>
                <a href="https://twitter.com/umutpy" target="_blank">
                  <span class="icon social">
                    <center>
                      <i class="fab fa-twitter"></i>
                    </center>
                  </span>
                </a>
                <a
                  href="https://steamcommunity.com/id/klyne312/"
                  target="_blank"
                >
                  <span class="icon social">
                    <center>
                      <i class="fab fa-steam"></i>
                    </center>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="column is-3">
            <div class="now-playing-div">
              <NowPlaying />
            </div>
          </div>
        </div>
        <div class="columns margin-120px-desktop">
          <div class="column">
            <div class="box bg-color-secondary min-390px-height">
              <p class="heading has-text-centered">Who am I?</p>
              <br />
              <p class="whoami-text">
                I am a Turkish science high school student interested in coding.
                My goal is is to make things that people can easily use. I'm
                trying to learn most of the things that I can learn, although I
                am mostly focused on JavaScript. I enjoy sharing my projects as
                open source. So this website is also open source!
                <a href="https://github.com/UmutGulmez/umutgulmez.github.io">
                  Check out my Github!
                </a>
              </p>
            </div>
          </div>
          <div class="column">
            <div class="box bg-color-secondary min-390px-height">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/common/Navbar'
import NowPlaying from '~/components/home/SpotifyNowPlaying'

export default {
  components: {
    Navbar,
    NowPlaying,
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

.social {
  background-color: var(--color-third);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 4px 0 0;
}

i {
  color: var(--text-secondary);
  font-size: 1.4rem;
  &:hover {
    color: var(--text-first);
  }
}

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

.subtitle {
  color: var(--text-secondary);
}

.who-am-i {
  margin: 75px 0;
}

.whoami-text {
  font-size: 1.4rem;
  margin: 10px;
}

.middle-column {
  padding: 30px;
}

.blogs {
  margin: 50px 0;
}

.menu-toggle-btn {
  width: 250px;
  background-color: var(--color-secondary);
  border: 0;
  padding: 10px 15px;
  color: #53e3a6;
  border-radius: 3px;
  cursor: pointer;
  font-size: 18px;
  transition-duration: 0.25s;
  font-size: 128%;
  min-height: 50px;
  border-radius: 5px;
  margin-top: 10px;
  &:hover {
    transform: translateY(-3px);
  }
}

.latest-blogs {
  margin-bottom: 0.7rem;
}

.bg-color-secondary {
  background-color: var(--color-secondary);
}

.min-390px-height {
  min-height: 390px;
}

@media only screen and (min-width: 600px) {
  .margin-120px-desktop {
    margin: 120px;
  }
}
</style>