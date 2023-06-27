<template>
  <t-button>填充按钮</t-button>
  <t-layout>
    <t-header>
      <t-head-menu>
        <t-menu-item value=""> 菜单内容一 </t-menu-item>
        <t-menu-item value=""> 菜单内容二 </t-menu-item>
        <t-menu-item value=""> 菜单内容三 </t-menu-item>
        <template #operations>
          <a href="javascript:;"
            ><t-icon class="t-menu__operations-icon" name="search"
          /></a>
          <a href="javascript:;"
            ><t-icon class="t-menu__operations-icon" name="notification-filled"
          /></a>
          <a href="javascript:;"
            ><t-icon class="t-menu__operations-icon" name="home"
          /></a>
        </template>
      </t-head-menu>
    </t-header>
    <t-content>
      <div>
        Content
        <ToolTip text="996icu" :options="{ placement: 'bottom' }" />
      </div>
    </t-content>
    <t-footer> Copyright </t-footer>
  </t-layout>
</template>
