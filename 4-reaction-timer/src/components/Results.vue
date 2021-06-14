<template>
  <h4>{{ message }}</h4>
  <p>Reaction time: {{ score }} ms</p>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            message: ""
        }
    },
    methods: {
        setMessage() {
            if (this.score < 250) {
                this.message = "Ninja fingers!"
            } else if (this.score < 450) {
                this.message = "Barely got it!"
            } else {
                this.message = "SLOW POKE!"
            }
        }
    },
    mounted() {
        this.setMessage()
    }
}
</script>

<style scoped>
    h4 {
        margin-bottom: 5px;
    }

    p {
        margin-top: 0px;
    }
</style>