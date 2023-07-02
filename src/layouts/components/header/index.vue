<template>
  <t-header>
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
</template>
<script setup lang="ts">
const router = useRouter()
const handleNav = (url: string) => {
  router.push(url)
}
</script>
<style lang="less" scoped>
.logo {
  margin-left: 24px;
  height: 28px;
  cursor: pointer;
}
</style>
