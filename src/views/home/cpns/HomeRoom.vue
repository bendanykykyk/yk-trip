<template>
  <div class="HomeRoom-container">
    <div class="title">房屋列表</div>
    <div class="list">
      <template v-for="(room, index) in rooms" :key="index">
        <!-- 遍历的item -->
        <house-item-v9
          v-if="room.discoveryContentType === 9"
          :info="room.data"
          @click="itemClick(room.data)"
        ></house-item-v9>

        <house-item-v3
          v-else-if="room.discoveryContentType === 3"
          :info="room.data"
          @click="itemClick(room.data)"
        ></house-item-v3>
      </template>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import { useHomeStore } from '@/stores/modules/home'
import { useRouter } from 'vue-router'

const homeStore = useHomeStore()
const { rooms } = toRefs(homeStore)
const router = useRouter()
// item点击操作
const itemClick = (roomData) => {
  router.push({
    path: `/room-detail/${roomData.houseId}`
  })
}
</script>

<style lang="less" scoped>
.HomeRoom-container {
  padding: 10px 18px;
  .title {
    font-size: 22px;
    font-weight: var(--font-weight-bold);
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
