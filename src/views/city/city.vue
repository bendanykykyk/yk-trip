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
      <van-tabs v-model:active="tabActiveName" color="#ff8594">
        <template v-for="(value, key) in cities" :key="key">
          <van-tab :title="value.title" :name="key">
            <!-- <city-group :city-groups-data="value"></city-group> -->
          </van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- <city-group :city-groups-data="currentGroup"></city-group> -->
      <!-- 这里优化一下，因为group数据太多 切换要卡顿 -->
      <template v-for="(value, key) in cities" :key="key">
        <city-group
          v-show="key === tabActiveName"
          :city-groups-data="value"
        ></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
// hook
import {
  ref,
  toRefs
  // computed
} from 'vue'
import { useRouter } from 'vue-router'
// 数据
import { useCityStore } from '@/stores/modules/city'
// 组件
import cityGroup from './cpns/city-group.vue'

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
const tabActiveName = ref('')

// 获取city数据
const cityStore = useCityStore()
cityStore.fetchAllCities()
const { cities } = toRefs(cityStore)

// 如果想要这里保持吃响应式，就要用computed（希望这里可以变化）。因为这里cities.value 和tabActiveName.value其实都只是值而已
// 通过computed 当cities.value或者tabActiveName.value发生改变的时候，会重新计算
// 当然你也可以直接在template循环的时候使用cities[tabActiveName].cities去循环，这样值变化的时候就会自动重新渲染
// const currentGroup = computed(() => cities.value[tabActiveName.value])
</script>

<style lang="less" scoped>
.city-container {
  // --van-search-left-icon-color: var(--primary-color);
  :deep(.van-search__field .van-field__left-icon) {
    color: var(--primary-color);
  }
  height: 100vh;
}

.top {
  position: relative;
  z-index: 10;
}

.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>
