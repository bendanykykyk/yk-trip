<template>
  <div class="room-detail-container">
    <nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="handleLeftClick"
    ></nav-bar>
    <!-- 轮播图 -->
    <div v-if="mainPart" class="main">
      <room-swipe
        :swipe-data="mainPart.topModule.housePicture.housePics"
      ></room-swipe>
      <!-- 简介 -->
      <room-brief :brief-data="mainPart.topModule"></room-brief>
      <!-- 房屋设施 -->
      <room-device
        :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"
      ></room-device>
      <room-landlord
        :landlord="mainPart.dynamicModule.landlordModule"
      ></room-landlord>
      <room-comment
        :comment="mainPart.dynamicModule.commentModule"
      ></room-comment>
      <room-notice
        :order-rules="mainPart.dynamicModule.rulesModule.orderRules"
      ></room-notice>
      <room-map :position="mainPart.dynamicModule.positionModule"></room-map>
    </div>
  </div>
</template>

<script setup>
// hook
import { onMounted, ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// 组件
import navBar from '@/base-ui/navBar/navBar.vue'
import roomSwipe from './cpns/room_01-swipe.vue'
import roomBrief from './cpns/room_02-brief.vue'
import roomDevice from './cpns/room_03-device.vue'
import roomLandlord from './cpns/room_04-landlord.vue'
import roomComment from './cpns/room_05-comment.vue'
import roomNotice from './cpns/room_06-notice.vue'
import roomMap from './cpns/room_07-map.vue'
// api
import { getRoomDetail } from '@/services/modules/room'

const router = useRouter()
const route = useRoute()
// navbar
const handleLeftClick = () => {
  router.push({ name: 'home' })
}

// 获取room-detail数据(处理这种比较复杂的数据，可以使用这种computed,这样可以省很多操作)
let detailInfo = ref({})
let mainPart = computed(() => detailInfo.value.mainPart)

// 轮播图
onMounted(async () => {
  let res = await getRoomDetail({ houseId: route.params.id })
  detailInfo.value = res.data
})
// 获取详情数据
</script>

<style lang="less" scoped></style>
