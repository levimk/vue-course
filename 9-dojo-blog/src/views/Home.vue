<template>
  <div class="home">
    <div class="layout" v-if="posts.length">
      <Posts :posts="posts" />
      <TagCloud :posts="posts"/>
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
import TagCloud from '@/components/TagCloud'
import getPosts from '@/composables/getPosts'

export default {
  name: 'Home',
  components: { Posts, Spinner, TagCloud },
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
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>