<template>
  <div class="backdrop">
      <div class="modal">
          <p>Modal content</p>
      </div>
  </div>
</template>

<script>
export default {

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
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>