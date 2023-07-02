<template>
  <t-layout class="layout">
    <t-header class="layout-header">
      <t-head-menu>
        <template #logo>
          <img
            class="logo"
            height="28"
            src="https://tdesign.gtimg.com/site/baseLogo-light.png"
            alt="logo"
            @click="handleNav('/dashboard/analysis')"
          />
        </template>
        <t-menu-item value="item1"> 菜单11 </t-menu-item>
        <t-menu-item value="item2"> 菜单2</t-menu-item>
        <template #operations>
          <t-button variant="text" shape="square">
            <template #icon><t-icon name="search" /></template>
          </t-button>
        </template>
      </t-head-menu>
    </t-header>
    <t-layout class="layout-content">
      <t-aside>
        <t-menu theme="light" default-value="item1" :collapsed="collapsed">
          <t-menu-item value="item1"> 仪表盘 </t-menu-item>
          <t-menu-item value="item2"> 资源列表 </t-menu-item>
          <t-submenu value="3">
            <template #icon>
              <t-icon name="mail" />
            </template>
            <template #title>
              <span>消息区</span>
            </template>
            <t-submenu value="3-1" title="二级菜单">
              <t-menu-item value="3-1-1"> 三级菜单内容 </t-menu-item>
              <t-menu-item value="3-1-2"> 三级菜单内容 </t-menu-item>
              <t-menu-item value="3-1-3"> 三级菜单内容 </t-menu-item>
            </t-submenu>
          </t-submenu>
          <template #operations>
            <t-button variant="text" shape="square" @click="changeCollapsed">
              <template #icon><t-icon name="view-list" /></template>
            </t-button>
          </template>
        </t-menu>
      </t-aside>
      <t-content>
        <router-view />
      </t-content>
    </t-layout>
  </t-layout>
</template>

<script setup lang="ts">
const router = useRouter()
const collapsed = ref(false)
const changeCollapsed = () => {
  collapsed.value = !collapsed.value
}
const handleNav = (url: string) => {
  router.push(url)
}
</script>

<style lang="less" scoped>
.layout {
  height: 100vh;
}
.layout-header {
  .logo {
    margin-left: 24px;
    height: 28px;
    cursor: pointer;
  }
}
.layout-content {
  .t-layout__sider {
    width: fit-content;
  }
}
</style>
