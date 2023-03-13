<template>
  <div class="room-detail-container">
    <!-- 滚动360px 就显示tab-control -->
    <tab-control
      v-if="isTabShow"
      class="tab-control"
      :data="tabs"
      @onTabClick="onTabClick"
    ></tab-control>
    <nav-bar
      ref="navBarRef"
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
      <room-brief
        name="描述"
        :ref="getSectionRef"
        :brief-data="mainPart.topModule"
      ></room-brief>
      <!-- 房屋设施 -->
      <room-device
        name="设施"
        :ref="getSectionRef"
        :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"
      ></room-device>
      <room-landlord
        name="房东"
        :ref="getSectionRef"
        :landlord="mainPart.dynamicModule.landlordModule"
      ></room-landlord>
      <room-comment
        name="评论"
        :ref="getSectionRef"
        :comment="mainPart.dynamicModule.commentModule"
      ></room-comment>
      <room-notice
        name="须知"
        :ref="getSectionRef"
        :order-rules="mainPart.dynamicModule.rulesModule.orderRules"
      ></room-notice>
      <room-map
        name="周边"
        :ref="getSectionRef"
        :position="mainPart.dynamicModule.positionModule"
      ></room-map>
    </div>
  </div>
</template>

<script setup>
// hook
import { onMounted, ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useScroll } from '@/hook/useScroll'
// 组件
import navBar from '@/base-ui/navBar/navBar.vue'
import roomSwipe from './cpns/room_01-swipe.vue'
import roomBrief from './cpns/room_02-brief.vue'
import roomDevice from './cpns/room_03-device.vue'
import roomLandlord from './cpns/room_04-landlord.vue'
import roomComment from './cpns/room_05-comment.vue'
import roomNotice from './cpns/room_06-notice.vue'
import roomMap from './cpns/room_07-map.vue'
import tabControl from '@/base-ui/tab-control/tab-control.vue'
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

// tab-control

const { scrollTop } = useScroll()
const isTabShow = computed(() => scrollTop.value > 360)

// const elRefs = {}
const elMap = ref({})
let tabs = computed(() => Object.keys(elMap.value))
const getSectionRef = (elRef) => {
  const name = elRef.$el.getAttribute('name')
  // 存放elMaps
  elMap.value[name] = elRef.$el
}

const navBarRef = ref()
const onTabClick = (index, title) => {
  // 这里是因为我用的窗口在滚，如果是元素内，就要考虑ref.value.scrollTo
  const scrollDistance =
    elMap.value[title].offsetTop - navBarRef.value.$el.clientHeight
  window.scrollTo({
    top: scrollDistance,
    behavior: 'smooth'
  })
}
</script>

<style lang="less" scoped>
.tab-control {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
}
</style>
