<script setup>
</script>

<template>
  <button @click="$router.push('/1')">push to 1</button>
  <button @click="$router.push('/2')">push to 2</button>
  <button @click="$router.push('/3')">push to 3</button>
  <button @click="$router.push('/4')">push to 4</button>
  <RouterView />
</template>

<style scoped>
</style>
