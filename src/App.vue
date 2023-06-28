<template>
  <TConfigProvider :global-config="globalConfig">
    <RouterView />
  </TConfigProvider>
</template>

<script setup lang="ts">
const globalConfig = {}
</script>

<style lang="less" scoped></style>
