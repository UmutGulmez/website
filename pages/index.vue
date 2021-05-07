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
import Banner from '~/components/home/Banner'
import TechsBox from '~/components/home/TechsBox'
import WhoAmIBox from '~/components/home/WhoAmIBox'
import Blogs from '~/components/home/Blogs'
import GithubRepos from '~/components/home/GithubRepos'

export default {
  components: {
    Navbar,
    Footer,
    Banner,
    TechsBox,
    WhoAmIBox,
    Blogs,
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
</style>