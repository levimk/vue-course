<template lang="js">
    <form @submit.prevent="handleSubmit">
        <h4>Create new playlist</h4>
        <input
            type="text"
            required
            placeholder='Playlist title'
            v-model.trim="title"/>
        <textarea
            required
            placeholder='Playlist description...'
            v-model.trim='description'/>
        <label>Upload playlist cover image</label>
        <input type="file" @change="handleFileChange"/>
        <div v-if="fileError" class="error">{{fileError}}</div>
        <button>Create</button>
    </form>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const title = ref('')
        const description = ref('')
        const file = ref(null)
        const fileError = ref(null)
        
        
        const handleSubmit = () => {
            if (file.value && !fileError.value) {
                console.log(title.value, description.value, file.value)
            }
        }

        // allowed file types
        const types = ['image/png', 'image/jpeg', 'image/jpg']

        const handleFileChange = (event) => {
            const selected = event.target.files[0]

            if (selected && types.includes(selected.type)) {
                file.value = selected
                fileError.value = null
            } else {
                file.value = null
                fileError.value = 'Please select an image file (png or jpeg).'
            }
        }

        return { title, description, fileError, handleSubmit, handleFileChange }
    }
}
</script>
<style scoped>
  form {
    background: white;
  }
  input[type="file"] {
    border: 0;
    padding: 0;
  }
  label {
    font-size: 12px;
    display: block;
    margin-top: 30px;
  }
  button {
    margin-top: 20px;
  }
</style>