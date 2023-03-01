<template>
  <div>
    <nav-bar title="KK旅游"></nav-bar>
    <van-image width="100%" :src="requireResource('home/banner.jpg')" />
    <!-- 位置 -->
    <home-location></home-location>
  </div>
</template>

<script setup>
import navBar from '@/base-ui/navBar/navBar.vue'
import HomeLocation from './cpns/HomeLocation.vue'
import { requireResource } from '@/utils/load_assets'
</script>

<style lang="less" scoped></style>
