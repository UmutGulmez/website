<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      repositoryData: {},
    }
  },
  async fetch() {
    this.repositoryData = await fetch(
      'https://api.lanyard.rest/v1/users/274615370214670336'
    ).then((res) => res.json())
  },
}
</script>

<style lang="scss" scoped>
</style>