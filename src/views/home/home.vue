<template>
  <div>
    <nav-bar title="KK旅游"></nav-bar>
    <van-image width="100%" :src="requireResource('home/banner.webp')" />
    <!-- 位置 -->
    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img class="image" src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import navBar from '@/base-ui/navBar/navBar.vue'
import { requireResource } from '@/utils/load_assets'
</script>

<style lang="less" scoped>
/* location */
.location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 32px;
  .position {
    display: flex;
    align-items: center;
    .text {
      position: relative;
      left: -5px;
    }
    .image {
      height: 18px;
    }
  }
}
</style>
