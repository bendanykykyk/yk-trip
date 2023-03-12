<template>
  <div class="room_07-map-container">
    <section-a header-title="位置周边" footer-title="查看更多周边">
      <div id="baidu" ref="mapRef"></div>
    </section-a>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import sectionA from '@/components/section/section-a.vue'

const mapRef = ref()

const props = defineProps({
  position: {
    type: Object,
    default: () => ({})
  }
})

onMounted(() => {
  var map = new window.BMapGL.Map(mapRef.value)
  map.centerAndZoom(
    new window.BMapGL.Point(props.position.longitude, props.position.latitude),
    12
  ) // 初始化地图,设置中心点坐标和地图级别
  //   map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放

  //   标注
  var point = new window.BMapGL.Point(
    props.position.longitude,
    props.position.latitude
  )
  var marker = new window.BMapGL.Marker(point) // 创建标注
  map.addOverlay(marker) // 将标注添加到地图中
})
</script>

<style lang="less" scoped>
#baidu {
  width: 100%;
  height: 200px;
}
</style>
