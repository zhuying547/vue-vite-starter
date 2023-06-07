<template>
  <div>HelloWorld</div>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const count = ref(0)

function increment() {
  count.value++
}
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>
<style scoped>
button {
  font-weight: bold;
}
</style>
