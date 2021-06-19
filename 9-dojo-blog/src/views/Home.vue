<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Posts</h2>
    <div v-if="posts.length">
      <Posts :posts="posts" />
    </div>
    
    <div v-else>
      <Spinner />
    </div>
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts'
import Spinner from '@/components/Spinner'
import getPosts from '@/composables/getPosts'

export default {
  name: 'Home',
  components: {
    Posts,
    Spinner
  },
  setup() {
    const { posts, error, load } = getPosts()

    load()

    return {
      posts,
      error
    }
  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>