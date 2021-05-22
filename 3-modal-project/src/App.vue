<template>
  <div class="headline">
    <h1>{{ title }}</h1>
  </div>
  <teleport to="#modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <h3>{{ modalHeader }}</h3>
      <p>{{ modalText }}</p>
      <template v-slot:links>
        <a href="#">More info</a>
        <a href="#">Sign up</a>
      </template>
    </Modal>
  </teleport>

  <teleport to="#modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h3>{{ modalTwoHeader }}</h3>
      <p>{{ modalTwoText }}</p>
    </Modal>
  </teleport>

  <div class="modalBtns">
    <button @click="toggleModal">Show modal 1</button>
    <button @click="toggleModalTwo">Show modal 2</button>
  </div>
</template>

<script>
import Modal from './components/Modal'

export default {
  name: 'App',
  data () {
    return {
      title: 'My first Vue app!',
      modalHeader: "Become a Vue slot ninja",
      modalText: "Sign up today for a 50% discount. 72 hours only!",
      modalTwoHeader: "Buy my shit!",
      modalTwoText: "Trust me, it's good shit.",
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
      this.showModalTwo = false;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
      this.showModal = false;
    }
  },
  components: {
    Modal
  }
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

div.modalBtns {
  width: 50%;
  display: flex;
  justify-content: center;
}

div.modalBtns > button {
  margin-right: 5px;
  padding: 8px;
  color: #000;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0);
}
div.modalBtns > button:hover {
  color: rgb(40, 54, 56);
  border: 1px solid rgba(170, 232, 240, 1);
  background-color: rgba(170, 232, 240, 0.7);
  cursor: pointer;
}
</style>
