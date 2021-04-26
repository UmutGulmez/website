<template>
  <div>
    <div v-if="$fetchState.pending">
      <h4 class="title is-4 not-listening">Loading!</h4>
    </div>
    <div v-else-if="$fetchState.error">
      <h4 class="title is-4 not-listening">Error!</h4>
    </div>
    <div
      v-else
      class="box"
      :style="`
      background: url(${
        spotifyData.listening_to_spotify
          ? spotifyData.spotify.album_art_url
          : null
      }) no-repeat center;
      background-size: cover;
      padding: 0;
      `"
    >
      <div class="inside-box">
        <div class="heading">Spotify Now Playing</div>
        <div>
          <div v-if="spotifyData.listening_to_spotify">
            <div class="columns">
              <div class="column">
                <h5 class="title is-5 song-title">
                  {{ this.spotifyData.spotify.song }}
                </h5>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="bar-div">
                  <div class="bar">
                    <progress
                      class="progress is-small has-text-white"
                      :value="
                        Date.now() - spotifyData.activities[1].timestamps.start
                      "
                      :max="
                        spotifyData.activities[1].timestamps.end -
                        spotifyData.activities[1].timestamps.start
                      "
                    ></progress>
                  </div>
                </div>
              </div>
              <div class="column is-2 is-hidden-touch">
                <p class="song-end-time">
                  {{
                    msToSeconds(
                      spotifyData.activities[1].timestamps.end -
                        spotifyData.activities[1].timestamps.start
                    )
                  }}
                </p>
              </div>
            </div>
          </div>
          <div v-else>
            <h4 class="title is-4 not-listening">Not Listening!</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spotifyData: {},
    }
  },
  methods: {
    msToSeconds(ms) {
      var minutes = Math.floor(ms / 60000)
      var seconds = ((ms % 60000) / 1000).toFixed(0)
      return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    },
  },
  async fetch() {
    var songData = await fetch(
      'https://api.lanyard.rest/v1/users/274615370214670336'
    ).then((res) => res.json())

    this.spotifyData = songData.data
  },
}
</script>

<style lang="scss" scoped>
.columns {
  margin-bottom: 0;
}

.box {
  background-color: #1ed75fdc;
  border-radius: 12px;
}

.heading {
  color: var(--text-secondary);
  text-shadow: rgba(0, 0, 0, 0.55) 0px 54px 55px,
    rgba(0, 0, 0, 0.52) 0px -12px 30px, rgba(0, 0, 0, 0.52) 0px 4px 6px,
    rgba(0, 0, 0, 0.57) 0px 12px 13px, rgba(0, 0, 0, 0.59) 0px -3px 5px;
}

.song-image {
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 54px 55px,
    rgba(0, 0, 0, 0.32) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.37) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.song-title {
  color: var(--text-first);
  text-shadow: rgba(0, 0, 0, 0.55) 0px 54px 55px,
    rgba(0, 0, 0, 0.52) 0px -12px 30px, rgba(0, 0, 0, 0.52) 0px 4px 6px,
    rgba(0, 0, 0, 0.57) 0px 12px 13px, rgba(0, 0, 0, 0.59) 0px -3px 5px;
}

.bar {
  width: 100%;
  margin: 2px 0 0 0;
}

progress::-webkit-progress-bar {
  background-color: #ffffff93;
}

progress::-webkit-progress-value {
  background-color: #fff !important;
}

progress::-moz-progress-value {
  background-color: #fff !important;
}

.song-end-time {
  font-size: 12px;
}

.not-listening {
  color: var(--text-secondary);
}

.inside-box {
  background: rgba(#000, 0.5);
  padding: 2.25rem 1.25rem;
  margin: 1.75rem 0;
  border-radius: 12px;
}
</style>