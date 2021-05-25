<template>
  <div>
    <div class="title is-4 has-text-white has-text-centered">
      My repositories
    </div>
    <div class="columns is-multiline">
      <div
        class="column is-one-third"
        v-for="repo in repositoryData"
        :key="repo"
      >
        <GithubRepoBox
          :name="repo.name"
          :desc="repo.description"
          :lang="repo.language"
          :starCount="repo.stargazers_count"
          :url="repo.html_url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GithubRepoBox from '@/components/home/GithubRepoBox'

export default {
  data() {
    return {
      repositoryData: [],
    }
  },
  components: {
    GithubRepoBox,
  },
  async fetch() {
    var data = await fetch(
      'https://api.github.com/users/UmutGulmez/repos'
    ).then((res) => res.json())

    data = data.filter((x) => x.language)
    data = data.sort((a, b) => b.stargazers_count - a.stargazers_count)
    this.repositoryData = data.slice(0, 9)
  },
}
</script>

<style lang="scss" scoped>
</style>