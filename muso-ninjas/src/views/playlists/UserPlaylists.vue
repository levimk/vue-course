<template lang="">
    <div class="user-playlists">
        <h2>My Playlists</h2>
        <ListView v-if="playlists" :playlists="playlists" />
    </div>
    <router-link :to="{ name: 'CreatePlaylist' }" class="btn">Create a New Playlist</router-link>
</template>
<script>
import getCollection from '@/composables/getCollection'
import getUser from '@/composables/getUser'
import ListView from '@/components/ListView'

export default {
    components: { ListView },
    setup() {
        const { user } = getUser()
        console.log('user: ', user.value)
        const { error, documents: playlists } = getCollection('playlists', ["userId", "==", user.value.uid])
        console.log(playlists)
        return { error, playlists }
    }
}
</script>
<style scoped>
  h2 {
    padding-bottom: 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid var(--secondary)
  }
  .btn {
    margin-top: 20px;
  }
</style>