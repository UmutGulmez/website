<template>
  <div class="blogs has-text-white">
    <div class="title is-4 has-text-white has-text-centered">
      My Latest Blogs
    </div>
    <div id="medium-widget"></div>
    <script src="https://medium-widget.pixelpoint.io/widget.js"></script>
    <script>
      MediumWidget.Init({
        renderTo: '#medium-widget',
        params: {
          resource: 'https://medium.com/@umut.py',
          postsPerLine: 3,
          limit: 6,
          picture: 'big',
          fields: ['description', 'author', 'claps', 'likes', 'publishAt'],
          ratio: 'landscape',
        },
      })
    </script>

    <center>
      <a href="https://medium.com/@umut.py" target="_blank">
        <button class="see-more-button">
          <span class="has-text-white">See More!</span>
        </button>
      </a>
    </center>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.blogs {
  margin: 50px 0;
}

.latest-blogs {
  margin-bottom: 0.7rem;
}

.medium-widget-article__title,
.medium-widget-article__author-name {
  color: var(--text-first) !important;
}

.medium-widget-article__description,
.medium-widget-article__info,
.medium-widget-article__like,
.medium-widget-article__clap,
.medium-widget-article__date {
  color: var(--text-secondary) !important;
  & ::before {
    opacity: 1;
  }
}

.medium-widget-article__title:hover {
  color: #9e9e9e !important;
}

.medium-widget-article__item {
  max-width: 33%;
  padding: 1rem;
  background-color: var(--color-secondary) !important;
  border-radius: 8px;
  &:hover {
    transform: scale(1.01);
    transition: 0.4s;
  }
}

.medium-widget-article__image img {
  max-width: none;
  border-radius: 8px;
}

.see-more-button {
  background-color: var(--color-secondary) !important;
  border: 0;
  padding: 10px 15px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 18px;
  transition-duration: 0.25s;
  font-size: 128%;
  min-height: 65px;
  border-radius: 5px;
  width: 70%;
  margin-top: 40px;
  &:hover {
    transform: translateY(-3px);
    transition: 0.4s;
  }
}

@media only screen and (max-width: 1344px) {
  .medium-widget-article__image img {
    display: none;
  }
  .medium-widget-article__item {
    max-width: 100%;
  }
}
</style>