<template>
  <div class="city-container">
    <!-- 搜索框 -->
    <van-search
      v-model="searchText"
      shape="round"
      show-action
      placeholder="城市/区域/位置"
      @search="onSearch"
      @cancel="onCancel"
    />
    <van-tabs v-model:active="tabActiveIndex" color="#ff8594">
      <template v-for="(value, key) in cities" :key="key">
        <van-tab :title="value.title"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'

import { useCityStore } from '@/stores/modules/city'

// 搜索
const searchText = ref('')

const onSearch = (searchValue) => {
  console.log(searchValue)
}

const router = useRouter()
const onCancel = () => {
  router.back()
}
// tab
const tabActiveIndex = ref(0)

// 获取city数据
const cityStore = useCityStore()
cityStore.fetchAllCities()

const { cities } = toRefs(cityStore)
</script>

<style lang="less" scoped>
.city-container {
  // --van-search-left-icon-color: var(--primary-color);
  :deep(.van-search__field .van-field__left-icon) {
    color: var(--primary-color);
  }
}
</style>
