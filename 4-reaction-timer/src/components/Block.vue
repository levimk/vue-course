<template>
  <div class="block" v-if="showBlock" @click="handleClick">
    <p>{{ message }}</p>
    <p v-if="clicked">{{ reactionTime }} ms</p>
  </div>
</template>

<script>
export default {
    props: ['message', 'delay'],
    data() {
      return {
        showBlock: false,
        timer: null,
        reactionTime: 0,
        clicked: false
      }
    },
    mounted() {
      console.log("Block mounted")
      setTimeout(() => {
        this.showBlock = true
        this.startTimer()
      }, this.delay)
    },
    methods: {
      startTimer() {
        this.timer = setInterval(() => {
          this.reactionTime += 10
        }, 10)
      },
      stopTimer() {
        clearInterval(this.timer)
      },
      handleClick() {
        this.stopTimer()
        this.clicked = true
        this.$emit('end', this.reactionTime)
      }
    }
}
</script>

<style>
.block {
    width: 400px;
    border-radius: 10px;
    background: rgb(43, 212, 161);
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
    color: white;
    font-weight: 600;
}
</style>