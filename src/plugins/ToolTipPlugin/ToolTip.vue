<template>
  <span ref="tooltip"></span>
</template>

<script setup lang="ts">
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css' // optional for styling

import { tooltipOptionsInject } from './'
import type { Instance } from 'tippy.js'

import { onMounted, ref, onUpdated, onUnmounted, inject } from 'vue'

// accept the text prop so message can be customized
const props = defineProps({
  text: { type: String, required: true },
  options: {
    // ⬅️ define options as a prop
    type: Object,
    default() {
      return {} // ⬅️ default it to an empty object
    },
  },
})

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
// 模板引用需要通过一个显式指定的泛型参数和一个初始值 null 来创建：
const tooltip = ref<HTMLSpanElement | null>(null)

// tippyInstance used for destroying if it already exists before create a new one
let tippyInstance: Instance | null = null

// initialize tippy
function initTippy() {
  // if tippy tooltip already exists destroy it before creating another
  if (tippyInstance) tippyInstance.destroy()
  tippyInstance = tippy(tooltip.value?.parentNode as HTMLSpanElement, {
    ...inject(tooltipOptionsInject),
    content: props.text,
    ...props.options,
  })
}

// we should initialize tippy on mounted so that it works on app load
onMounted(initTippy)
// but we should also initialize it again on update
// so that the tooltip text is reactive
onUpdated(initTippy)

// Finally we should clean up things and prevent memory leaks by destorying
// tippy whenever the component is unmounted
onUnmounted(() => tippyInstance?.destroy())
</script>
