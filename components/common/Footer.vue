<template>
  <footer>
    <div class="container">
      <div class="level">
        <div class="level-left">
          <div class="content copyright">
            Copyright <i class="far fa-copyright"></i> Umut.py
          </div>
        </div>
        <div class="level-right">
          <Socials />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Socials from '@/components/Socials'

export default {
  components: {
    Socials,
  },
}
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--color-third);
  padding: 25px 0;
}

.copyright {
  color: var(--text-secondary);
  font-size: 1.5rem;
}
</style>