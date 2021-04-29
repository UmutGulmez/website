<template>
  <div>
    <div class="title is-3 has-text-white">My Repositorys</div>
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
        />
      </div>
    </div>
  </div>
</template>

<script>
import GithubRepoBox from '@/components/home/GithubReopBox'

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

    this.repositoryData = data.slice(0, 6)
  },
}
</script>

<style lang="scss" scoped>
</style>