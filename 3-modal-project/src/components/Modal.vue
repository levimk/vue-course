<template>
  <div class="backdrop" @click.self="closeModal" >
      <div class="modal" :class="{ sale: theme === 'sale' }">
          <div class="content">
              <slot>
                  Default content
              </slot>
          </div>

          <div class="actions">
              <slot name="links" />
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['theme'],
    methods: {
        closeModal() {
            this.$emit('close')
        } 
    }
}
</script>

<style >
.backdrop {
    top: 0;
    left: 0;
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

.modal .actions {
    width: 50%;
    display: flex;
    justify-content: space-around;
}

.modal .actions a {
    padding: 8px;
    border: 1px solid #000;
    border-radius: 4px;
    color: #000;
    text-decoration: none;
}

.modal .actions a:hover {
    border-width: 2px;
    font-weight: bold;
}

.modal.sale .actions a {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #ddd;
    text-decoration: none;
}

.modal.sale .actions a:hover {
    border-width: 2px;
    font-weight: bold;
}
</style>