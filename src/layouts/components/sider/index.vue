<template>
  <t-aside class="layout-aside">
    <t-menu v-model="value" theme="light" :collapsed="collapsed">
      <t-menu-item value="item1">
        <!-- <template #icon>
          <t-icon name="app" />
        </template> -->
        仪表盘
      </t-menu-item>
      <t-menu-item value="item2">
        <!-- <template #icon>
          <t-icon name="code" />
        </template> -->
        资源列表
      </t-menu-item>
      <t-submenu value="3">
        <!-- <template #icon>
          <t-icon name="mail" />
        </template> -->
        <template #title>
          <span>消息区</span>
        </template>
        <t-submenu value="3-1" title="二级菜单">
          <t-menu-item value="3-1-1"> 三级菜单内容 </t-menu-item>
          <t-menu-item value="3-1-2"> 三级菜单内容 </t-menu-item>
          <t-menu-item value="3-1-3"> 三级菜单内容 </t-menu-item>
        </t-submenu>
      </t-submenu>
      <!-- <template #operations>
        <t-button variant="text" shape="square" @click="changeCollapsed">
          <template #icon><t-icon :name="iconName" /></template>
        </t-button>
      </template> -->
    </t-menu>
  </t-aside>
</template>
<script setup lang="ts">
const value = ref('item2')

const collapsed = ref(false)
// const iconName = computed(() =>
//   collapsed.value ? 'chevron-right' : 'chevron-left'
// )
// const changeCollapsed = () => {
//   collapsed.value = !collapsed.value
// }
</script>
<style lang="less" scoped>
.layout-aside {
  width: fit-content;
}
</style>
