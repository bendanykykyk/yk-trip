<template>
  <div class="RoomSwipe-container">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item>
          <van-image :src="item.url"></van-image>
        </van-swipe-item>
      </template>
      <template #indicator="{ active }">
        <!-- <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div> -->
        <div class="custom-indicator">
          <div v-for="(value, key) in swipeGroup" :key="key">
            <div
              :class="{ active: swipeData[active]?.enumPictureCategory == key }"
            >
              <span> {{ /【.*?】/i.exec(value[0].title)[0] }}</span>
              <span v-if="swipeData[active]?.enumPictureCategory == key"
                >{{ getGroupIndex(swipeData[active]) + 1 }}/{{ value.length }}
              </span>
            </div>
          </div>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { handleDataByGroup } from '@/utils/deal_data'

const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})

const swipeGroup = handleDataByGroup(props.swipeData, 'enumPictureCategory')

const getGroupIndex = (item) => {
  const arr = swipeGroup[item.enumPictureCategory]
  return arr.findIndex((pic) => pic.orderIndex == item.orderIndex)
}
</script>

<style lang="less" scoped>
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
}

.active {
  color: #000;
  background: #fff;
}
</style>
