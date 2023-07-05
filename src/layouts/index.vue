<template>
  <t-layout class="layout">
    <Header class="layout-header" />
    <t-layout class="layout-body">
      <Aside class="layout-aside" />
      <t-content class="layout-content">
        <router-view />
      </t-content>
    </t-layout>
  </t-layout>
</template>

<script setup lang="ts">
import Header from './components/header/index.vue'
import Aside from './components/sider/index.vue'
</script>

<style lang="less" scoped>
.layout {
  height: 100vh;
}
</style>
