<template lang="">
    <div class="add-song">
        <button v-if="!showAddSong" type="button" @click="showAddSong=true">Add songs</button>
        <form v-else @submit.prevent="handleSubmit">
            <h4>Add a new song</h4>
            <input v-model="title" type="text" required placeholder="Song title" />
            <input v-model="artist" type="text" required placeholder="Artist" />
            <button type="submit">Add</button>
        </form>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import useDocument from '@/composables/useDocument'

export default {
    props: ['playlist'],
    setup(props) {
        const { error, updateDoc } = useDocument('playlists', props.playlist.id)
        const title = ref('')
        const artist = ref('')
        const showAddSong = ref(false)



        const handleSubmit = async () => {
            const newSong = {
                title: title.value,
                artist: artist.value,
                id: Math.floor(Math.random() * 1000)
            }
            showAddSong.value = false
            console.log(newSong)
            await updateDoc({
                songs: [...props.playlist.songs, newSong]
            })
            title.value = ''
            artist.value = ''
        }

        return { title, artist, showAddSong, handleSubmit, error }
    }
}
</script>
<style scoped>
  .add-song {
    text-align: center;
    margin-top: 40px;
  }
  form {
    max-width: 100%;
    text-align: left;
  }
  .add-song > button {
      margin-bottom: 10px;
  }
</style>