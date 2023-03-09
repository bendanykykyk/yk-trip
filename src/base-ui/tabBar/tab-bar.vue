<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" :route="true">
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
import tabbarData from '@/assets/data/tabbar'
import { requireResource } from '@/utils/load_assets'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
  tabbarData: {
    type: Array,
    default() {
      return []
    }
  }
})
const route = useRoute()
const currentIndex = ref(0)
// 修复更改路由时currentIndex没有改变的bug
watch(route, (newRoute) => {
  let index = tabbarData.findIndex((item) => item.path == newRoute.path)
  if (index === -1) return
  currentIndex.value = index
})
</script>

<style lang="less" scoped>
.tab-bar {
  position: relative;
  z-index: 999;
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
