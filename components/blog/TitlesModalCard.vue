 <template>
  <div class="box modal-box">
    <p class="heading">Makalenin Başlıkları</p>
    <br />
    <a
      v-for="title in titles"
      :key="title.id"
      class="title-text"
      @click="goToTitle(title)"
    >
      - {{ title.text }}
      <br />
    </a>
  </div>
</template>

<script>
export default {
  props: ['titles'],
  methods: {
    goToTitle(title) {
      this.$emit('close')
      this.$router.push(`/blog/${this.$route.params.slug}#${title.id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-box {
  min-height: 50vh;
}

.heading {
  color: var(--text-secondary);
}

.title-text {
  line-height: 2rem;
}
</style>