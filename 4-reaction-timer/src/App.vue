<template>
  <h1>Ninja Reaction Timer</h1>
  <div class="buttons">
    <button class="start" @click="start" :disabled='isPlaying'>Start game</button>
  </div>
  <Block v-if='isPlaying' message="Click me!" :delay='delay' @end='endGame'/>
  <Results v-if='showResults' :score='score'/>
</template>

<script>
import Block from './components/Block'
import Results from './components/Results'

export default {
  name: 'App',
  components: {
    Block,
    Results
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      console.log("Delay: ", this.delay)
      this.showResults = false
    },
    endGame(reactionTime) {
      console.log(reactionTime)
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  },
  data() {
    return {
      isPlaying: false,
      delay: 0,
      score: null,
      showResults: false
    }
  }
}
</script>

<style>
/*
  turqois: rgb(43, 212, 161)
*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin: 60px auto 60px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

button {
  background: transparent;
  border: 1px solid rgb(43, 212, 161);
  border-radius: 5px;
  padding: 5px;
  color: rgb(43, 212, 161);
}

button:hover {
  border-width: 2px;
  font-weight: bold;
  cursor: pointer;
}

button:disabled {
  border-color: #ddd;
  color: #ddd;
}

button:hover:disabled {
  border-width: 1px;
  font-weight: normal;
  cursor: pointer;
}

.buttons {
  width: 30%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
}
</style>
