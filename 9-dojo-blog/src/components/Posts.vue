<template>
  <div v-for="post in posts">
      <h3>{{ post.title }}</h3>
      <p>{{ post.details }}</p>
  </div>
  <button @click="posts.pop()">Remove post</button>
</template>

<script>
import { ref } from 'vue'
export default {
    props: ['posts'],
    setup(props) {
        const posts = ref(props.posts)
        return { posts }
    }
}
</script>

<style>

</style>