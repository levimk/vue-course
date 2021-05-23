<template>
  <div class="block">
    <p>{{ message }}</p>
    <p>{{ delay }}</p>
  </div>
</template>

<script>
export default {
    props: ['message', 'delay']
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