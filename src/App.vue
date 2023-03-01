<template>
  <div>
    <RouterView />
    <tab-bar :tabbar-data="tabbarData"></tab-bar>
  </div>

  <!-- 导航栏 -->
</template>

<script setup>
import { RouterView } from 'vue-router'
import tabBar from './base-ui/tabBar/tab-bar.vue'
import tabbarData from '@/assets/data/tabbar.js'
</script>

<style scoped></style>
