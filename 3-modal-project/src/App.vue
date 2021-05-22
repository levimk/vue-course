<template>
  <Modal
    :header="header"
    :text="text"
    theme="sale"/>
  <div class="headline">
    <h1>{{ title }}</h1>
    <input type="text" ref="name">
    <button @click="handleClick">Click me!</button>
  </div>
</template>

<script>
import Modal from './components/Modal'

export default {
  name: 'App',
  data () {
    return {
      title: 'My first Vue app!',
      header: "Become a Vue ninja",
      text: "Sign up today for a 50% discount. 48 hours only!"
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }
  },
  components: {
    Modal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}

.headline {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
