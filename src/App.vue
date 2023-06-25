<template>
  <TButton @click="count++">Click me: {{ count }}</TButton>
  <TInput></TInput>
  <Button>asd</Button>
  <!-- <router-view></router-view> -->
  <TButton>asd</TButton>
  <t-select></t-select>
  <header id="header">header</header>
</template>

<script setup lang="ts">
const count = ref(0)
</script>

<style lang="less">
.head {
}
</style>
