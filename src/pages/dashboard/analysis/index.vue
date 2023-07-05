<template>
  <div>
    <div>内置Icon：<t-icon name="translate"></t-icon></div>

    <t-space direction="vertical">
      <p>白日依山尽，黄河入海流。</p>
      <t-divider>《登鹳雀楼》 - 王之涣</t-divider>
      <p>欲穷千里目，更上一层楼。</p>
    </t-space>
    <t-space>
      <t-button>Button</t-button>
      <t-button>Button</t-button>
      <t-button>Button</t-button>
      <t-button>Button</t-button>
    </t-space>
    <t-back-top size="small" :offset="[20, 0]"></t-back-top>
  </div>
  <t-comment
    avatar="https://tdesign.gtimg.com/site/avatar.jpg"
    author="评论作者名"
    datetime="今天16:38"
    content="这里是评论者写的评论内容。"
  />
</template>
