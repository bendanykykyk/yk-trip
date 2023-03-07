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
    <!-- 种类选择 -->
    <home-categories></home-categories>
    <div class="search-bar" v-if="isSearchBarShow">我是search-bar</div>
    <!-- 房屋列表 -->
    <home-room></home-room>
  </div>
</template>

<script setup>
// hook
import { useScroll } from '@/hook/useScroll.js'
import { watch, computed } from 'vue'
// 组件
import navBar from '@/base-ui/navBar/navBar.vue'
import HomeLocation from './cpns/HomeLocation.vue'
import HomeTimePicker from './cpns/HomeTimePicker.vue'
import HomeHotSuggestion from './cpns/HomeHotSuggestion.vue'
import HomeCategories from './cpns/HomeCategories.vue'
import HomeRoom from './cpns/HomeRoom.vue'
// 工具
import { requireResource } from '@/utils/load_assets'

// store
import { useHomeStore } from '@/stores/modules/home'

const homeStore = useHomeStore()

// 发送网络请求
homeStore.fetchHotSuggestion()
homeStore.fetchCategories()
homeStore.fetchRooms()

// 监听是否到底部
const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, async (newVal) => {
  if (newVal) {
    await homeStore.fetchRooms()
    isReachBottom.value = false
  }
})

// const isSearchBarShow = ref(false)
// watch(scrollTop, (newVal) => {
//   if (newVal >= 100) {
//     isSearchBarShow.value = true
//   } else {
//     isSearchBarShow.value = false
//   }
// })

const isSearchBarShow = computed(() => scrollTop.value > 350)
</script>

<style lang="less" scoped>
.search-bar {
  position: fixed;
  left: 0;
  right: 0;
  height: 45px;
  top: 0;
  background-color: #fff;
  padding: 16px 16px 14px;
  z-index: 11;
}
</style>
