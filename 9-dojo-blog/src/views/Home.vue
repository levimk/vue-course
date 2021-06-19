<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Posts</h2>
    <Posts :posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'
import Posts from '@/components/Posts'

export default {
  name: 'Home',
  components: {
    Posts
  },
  setup() {
    const posts = ref([
      { id: 1, title: "abc", body: "lorem ipsum"},
      { id: 2, title: "def", body: "delorum sum"}
    ])

    return {
      posts
    }
  }
}
</script>
