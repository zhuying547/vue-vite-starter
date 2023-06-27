<template>
  {{ count.toFixed(2) }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  emits: {
    addBook(payload: { bookName: string }) {
      return payload.bookName.length > 0
    },
  },
  data() {
    return {
      count: 1,
    }
  },
  mounted() {
    this.name.charAt(0)
  },
  methods: {
    onSubmit() {
      this.$emit('addBook', {
        bookName: '12',
      })
    },
  },
})
</script>
