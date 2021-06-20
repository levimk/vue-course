<template>
  <header>
      <h1><router-link :to="{name: 'Home'}">The Dojo Blog</router-link></h1>
      <nav>
          <router-link :to="{ name: 'Home' }">Home</router-link>
          <router-link :to="{ name: 'Create' }">Create Post</router-link>
      </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  header h1 {
    color: #dfdfdf;
    font-size: 48px;
  }
  header a {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
  }
  header a.router-link-active {
    color: #444;
    font-weight: bold;
  }

  header h1 a {
    color: #ff8800;
  }

  header h1 a.router-link-active {
    color: #ff8800;
  }
</style>