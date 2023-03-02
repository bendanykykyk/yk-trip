<template>
  <div class="city-container">
    <div class="top">
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
    <div class="content">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
      </ul>
    </div>
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
  height: 100vh;
}

.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>
