<template>
  <div class="city-group-container">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="label">
        <template
          v-for="(city, index) in cityGroupsData.hotCities"
          :key="index"
        >
          <div class="label-item" @click="cityClick(city)">
            <div>{{ city.cityName }}</div>
          </div>
        </template>
      </div>

      <template
        v-for="(cityGroup, index) in cityGroupsData.cities"
        :key="index"
      >
        <van-index-anchor :index="cityGroup.group" />
        <template v-for="(city, indey) in cityGroup.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { useCityStore } from '@/stores/modules/city'
import { useRouter } from 'vue-router'

import { computed } from 'vue'
const props = defineProps({
  cityGroupsData: {
    type: Object,
    default: () => ({})
  }
})

// 这种indexList 其实一般是算出来的
const indexList = computed(() => {
  const list = props.cityGroupsData.cities.map((item) => item.group)
  list.unshift('#')
  return list
  //   return ['#', ...props.cityGroupsData.cities.map((item) => item.group)]
})
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  cityStore.currentCity = city
  router.back()
}
</script>

<style lang="less" scoped>
.label {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;
  //   width: 100%;
  //   padding-left: 10px;
}
.label-item {
  background: #fff7f0;
  border-radius: 10px;
  width: 70px;
  height: 28px;
  line-height: 28px;
  //   flex: 0 0 25%;
  text-align: center;
  margin-top: 10px;
}
</style>
