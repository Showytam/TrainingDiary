<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  padding: 5px 15px;
  font-size: 18px;
  font-weight: bold;
  background: none;
  color: snow;
  border: none;
  cursor: pointer;
}

</style>
