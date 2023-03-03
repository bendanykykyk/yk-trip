<template>
  <div class="location">
    <div class="city" @click="handleCityClick">
      {{ useCityStore().currentCity?.cityName }}
    </div>
    <div class="position" @click="handlePositionClick">
      <span class="text">我的位置</span>
      <img class="image" src="@/assets/img/home/icon_location.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { showDialog } from 'vant'
import { useRouter } from 'vue-router'

// store
import { useCityStore } from '@/stores/modules/city'

const router = useRouter()
const handleCityClick = () => {
  router.push('/city')
}

const handlePositionClick = () => {
  // 获取位置信息，必须是https，localhost的话好像是可以的。
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords
      showDialog({ message: `您的经纬度是:${latitude},${longitude}` })
    },
    () => {
      showDialog({ message: '获取失败咯,别点我啦' })
    }
  )
}
</script>

<style lang="less" scoped>
/* location */
.location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 32px;
  color: #666;
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
