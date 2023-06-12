<script setup lang="ts">
import { reactive } from 'vue'
let state = reactive({ count: 0 })
</script>
<template>
  <div>{{ state.count }}</div>
</template>
