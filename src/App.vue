<script setup>
  import LoginVue from '@/views/Login.vue'
  import LayoutVue from '@/views/Layout.vue'
</script>

<template>
  <!-- <RouterView></RouterView> 是 Vue.js 框架中的一个组件，用于渲染与当前路由匹配的组件视图。
    当用户在应用中导航到不同的页面时，<RouterView> 组件会负责显示与当前路由对应的组件。 -->
      <!-- 指定组件的呈现位置。用户点击的路径，从路由中获取路径相应的组件，替换掉router-view -->
  <router-view></router-view>
</template>

<style scoped>

</style>
