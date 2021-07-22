<template>
  <h2>Blog</h2>
  <div v-if="error">
    {{ error }}
  </div>
  <div v-else>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <div class="tags">
        <a v-for="tag in post.tags" :key="tag">#{{ tag }}</a>
      </div>
      <p class="pre">{{ post.body }}</p>
      <button @click="handleDelete" class="delete">Delete</button>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import getPost from '@/composables/getPost'
import Spinner from '@/components/Spinner'
import { projectFirestore } from '../firebase/config'

// id, title, body, tags
export default {
  props: ['id'],
  components: {
    Spinner
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    console.log(route.params.id)
    const { id } = props
    const { post, error, load } = getPost(props.id)
    load() 
    
    const handleDelete = async () => {
      try {
        await projectFirestore.collection('posts').doc(id).delete()
      } catch (err) {
        console.log(err)
      }
      router.push({ name: 'Home' })
    }

    return {
      post,
      error,
      handleDelete
    }
  }
}
</script>

<style scoped>
  .tags a {
    margin-right: 10px;
  }
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }

  button.delete {
    margin: 10px auto;
  }
</style>