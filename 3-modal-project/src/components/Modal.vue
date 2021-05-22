<template>
  <div class="backdrop" @click="closeModal" >
      <div
        class="modal"
        :class="{ sale: theme === 'sale' }">
          <h3>{{ header }}</h3>
          <p>{{ text }}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['header', 'text', 'theme'],
    methods: {
        closeModal() {
            this.$emit('close')
        } 
    }
}
</script>

<style scoped>
.backdrop {
    top: 0;
    position: fixed;
    background-color: rgba(0,0,0, 0.5);
    width: 100%;
    height: 100%;
}

.modal {
    background-color: white;
    border-radius: 5px;
    margin: 100px auto;
    max-width: 400px;
    max-height: 600px;
    padding: 40px 60px 40px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal h3 {
    color: aquamarine;
}

.modal.sale {
    background: rgb(61, 165, 113);
}

.modal.sale h3 {
    color: white;
    font-weight: bolder;
}

.modal.sale p {
    color: white;
}
</style>