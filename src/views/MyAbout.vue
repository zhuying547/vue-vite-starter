<template>
  {{ count.toFixed(2) }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      count: 1,
    }
  },
})
</script>
