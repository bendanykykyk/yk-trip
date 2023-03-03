<template>
  <div class="home-container">
    <nav-bar title="KK旅游"></nav-bar>
    <van-image width="100%" :src="requireResource('home/banner.jpg')" />
    <!-- 位置 -->
    <home-location></home-location>
    <!-- 选择日期区间  -->
    <home-time-picker></home-time-picker>
    <!-- 选择关键字/位置/民宿名 -->
    <home-hot-suggestion style="margin-top: 20px"></home-hot-suggestion>
  </div>
</template>

<script setup>
// hook

// 组件
import navBar from '@/base-ui/navBar/navBar.vue'
import HomeLocation from './cpns/HomeLocation.vue'
import HomeTimePicker from './cpns/HomeTimePicker.vue'
import HomeHotSuggestion from './cpns/HomeHotSuggestion.vue'
// 工具
import { requireResource } from '@/utils/load_assets'
// store
import { useHomeStore } from '@/stores/modules/home'

const homeStore = useHomeStore()
homeStore.fetchHotSuggestion()
// 发送网络请求
</script>

<style lang="less" scoped></style>
