<template>
  <div class="HomeHotSuggestion-container">
    <span class="title">关键字/位置/民宿名</span>
    <div class="hot-suggestion">
      <template v-for="(label, index) in hotSuggestion" :key="index">
        <div class="label" :style="{ color: label.tagText.color }">
          {{ label.tagText.text }}
        </div>
      </template>
    </div>
    <div class="search-bar">
      <div class="btn" @click="handleSearch">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
// store
import { useHomeStore } from '@/stores/modules/home'
import { useRouter } from 'vue-router'
import { useCityStore } from '@/stores/modules/city'

// 获取热搜数据
const homeStore = useHomeStore()
const { hotSuggestion, startTime, endTime } = toRefs(homeStore)
const cityStore = useCityStore()
const { currentCity } = toRefs(cityStore)
// search按钮
const router = useRouter()
const handleSearch = () => {
  router.push({
    path: '/search',
    query: {
      startTime: startTime.value,
      endTime: endTime.value,
      cityName: currentCity.value.cityName
    }
  })
}
</script>

<style lang="less" scoped>
.HomeHotSuggestion-container {
  padding: 0 20px;
  .title {
    color: var(--gray-color);
  }
  .hot-suggestion {
    display: flex;
    flex-wrap: wrap;
    .label {
      border-radius: 10px;
      background: #f8f6f6;
      padding: 4px 6px;
      margin-top: 10px;
      margin-left: 12px;
    }
  }
}

.search-bar {
  margin-top: 10px;
  .btn {
    background: var(--theme-linear-gradient);
    height: 36px;
    line-height: 36px;
    border-radius: 20px;
    color: #f8f6f6;
    text-align: center;
    font-size: 16px;
  }
}
</style>
