<template>
  <div>
    <Navbar />
    <div class="container">
      <Banner />
      <div class="columns">
        <div class="column">
          <WhoAmIBox />
        </div>
        <div class="column">
          <TechsBox />
        </div>
      </div>
      <div style="margin: 150px 0"></div>
      <div class="title is-4 has-text-centered">My Pinned Blogs</div>
      <PinnedBlogs :isHalf="true" :count="6" />
      <center>
        <a class="button blogs-button mt-4" href="/blog"
          >See all articles (🇹🇷)</a
        >
      </center>
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
import Banner from '~/components/home/Banner'
import TechsBox from '~/components/home/TechsBox'
import WhoAmIBox from '~/components/home/WhoAmIBox'
import GithubRepos from '~/components/home/GithubRepos'
import PinnedBlogs from '~/components/blog/PinnedBlogs.vue'

export default {
  components: {
    Navbar,
    Footer,
    Banner,
    TechsBox,
    WhoAmIBox,
    PinnedBlogs,
    GithubRepos,
  },
}
</script>

<style lang="scss" scoped>
a:hover {
  color: #9e9e9e !important;
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

.blogs-button {
  width: 90%;
  height: 70px;
  background-color: var(--color-secondary);
  border: none;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);
  color: white;
  font-size: 1.5rem;
  &:hover {
    transform: translateY(-3px);
    transition: all 0.3s;
  }
  &:focus,
  :focus-within {
    border: none;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
      0 0px 0 1px rgba(10, 10, 10, 0.02);
  }
}
</style>