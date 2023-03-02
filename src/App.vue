<template>
  <div>
    <RouterView />
    <tab-bar
      v-if="!route.meta.isTabbarHidden"
      :tabbar-data="tabbarData"
    ></tab-bar>
  </div>

  <!-- 导航栏 -->
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'
import tabBar from './base-ui/tabBar/tab-bar.vue'
import tabbarData from '@/assets/data/tabbar.js'

const route = useRoute()
</script>

<style scoped></style>
