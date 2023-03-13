<template>
  <div class="room-detail-container">
    <!-- 滚动360px 就显示tab-control -->
    <tab-control
      ref="tabControlRef"
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
    <!-- v-memo为了节约性能的，这里滚动一次，下面:ref绑定的函数都会重复调用，不好 -->
    <div v-if="mainPart" class="main" v-memo="[mainPart]">
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
import { onMounted, ref, computed, watch } from 'vue'

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

const elMap = ref({})
let tabs = computed(() => Object.keys(elMap.value))
const getSectionRef = (elRef) => {
  // 因为卸载的时候也会被调用，此时$el已经没了
  if (!elRef) return

  const name = elRef.$el.getAttribute('name')
  // 存放elMaps
  elMap.value[name] = elRef.$el
}

const navBarRef = ref()
let isClick = ref(false)
let currentDistance = -1
const onTabClick = (index, title) => {
  isClick.value = true
  // 这里是因为我用的窗口在滚，如果是元素内，就要考虑ref.value.scrollTo
  const scrollDistance =
    elMap.value[title].offsetTop - navBarRef.value.$el.clientHeight
  window.scrollTo({
    top: scrollDistance,
    behavior: 'smooth'
  })
  currentDistance = scrollDistance
}
// tab-control 滚动并且tab跟随变化

const tabControlRef = ref()
// 1.找到[10,20,30,40]这么个scrollTop数组

watch(scrollTop, (newVal) => {
  // 如果说 我们计算出来的滚动的位置和页面当前scrollTop相等，那么就相当于点击结束了
  if (currentDistance == newVal) {
    isClick.value = false
  }
  // 如果当前是鼠标点击状态，就不用走下面的操作了
  if (isClick.value) return
  // elMap {'name':dom1,'name2':dom2}
  // 1.找到[10,20,30,40]这么个scrollTop数组
  let elValues = Object.values(elMap.value)
  const offsetTops = elValues.map((item) => item.offsetTop)
  console.log(offsetTops)

  // 2.每次都去遍历一下，找到那个刚好大于scrollTop的index
  let index = -1
  for (let i = 0; i < offsetTops.length; i++) {
    if (newVal + 46 < offsetTops[i]) {
      index = i - 1
      break
    }
  }

  // 3.设置子组件的active
  tabControlRef.value?.setCurrentActive(index)
})
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
