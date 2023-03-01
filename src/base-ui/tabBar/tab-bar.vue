<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex">
      <template v-for="(item, index) in tabbarData" :key="item.text">
        <van-tabbar-item icon="home-o" :to="item.path">
          <span :class="currentIndex === index ? 'active' : ''">
            {{ item.text }}
          </span>
          <template #icon="{ active }">
            <van-image
              :src="requireResource(active ? item.imageActive : item.image)"
            ></van-image>
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { requireResource } from '@/utils/load_assets'
import { ref } from 'vue'

defineProps({
  tabbarData: {
    type: Array,
    default() {
      return []
    }
  }
})

const currentIndex = ref(0)
</script>

<style lang="less" scoped>
.tab-bar {
  //   --van-tabbar-item-text-color: #f00 !important;
  :deep(.van-tabbar-item__icon img) {
    width: auto; // 微信有时候需要你加这个auto 修复bug
    height: 26px;
  }
}
.active {
  color: var(--primary-color);
}
</style>
