<template>
  <div class="home-categories-container">
    <div class="list">
      <template v-for="(item, index) in categories" :key="index">
        <div class="item">
          <van-image class="image" :src="item.pictureUrl"></van-image>
          <span class="text">{{ item.title }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import { useHomeStore } from '@/stores/modules/home'

const homeStore = useHomeStore()
const { categories } = toRefs(homeStore)
</script>

<style lang="less" scoped>
/* 隐藏滚动条 */
::-webkit-scrollbar {
  display: none;
}
.list {
  display: flex;
  flex-wrap: nowrap;
  font-size: 14px;
  width: 100%;
  overflow-x: auto;
  box-sizing: border-box;
  padding: 15px 10px;

  .item {
    min-width: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .image {
      width: 32px;
      height: 32px;
    }
    .text {
      margin-top: 5px;
    }
  }
}
</style>
