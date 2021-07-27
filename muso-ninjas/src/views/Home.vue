<template>
  <div class="home">
    <h2>Home</h2>
  </div>
  <div v-if="error" class="error">
    There was an error loading the playlists.
  </div>
  <ListView :playlists="documents" />
</template>

<script>
import getCollection from '@/composables/getCollection'
import ListView from '@/components/ListView'

export default {
  components: {
    ListView
  },
  setup() {
    const { error, documents } = getCollection('playlists')

    return { error, documents }
  }
}
</script>

<style scoped>
p.playlist-author {
  color: lightslategray;
  font-weight: lighter;
}

ul#playlistList {
  margin-top: 10px;
  list-style-type: none;
}
ul#playlistList li {
  margin-bottom: 15px;
}
</style>>
