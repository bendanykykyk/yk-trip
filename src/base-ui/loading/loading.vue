<template>
  <div class="loading" v-if="isLoading" @click="handleMaskClick">
    <!-- loading-bg -->
    <!-- full-screen-loading -->
    <div class="main-loading">
      <van-image
        class="gif"
        :src="requireResource('home/full-screen-loading.gif')"
      ></van-image>
    </div>
  </div>
</template>

<script setup>
import { requireResource } from '@/utils/load_assets'
import { useMainStore } from '@/stores/modules/main'
import { toRefs } from 'vue'
// loading的显示
const mainStore = useMainStore()
const { isLoading } = toRefs(mainStore)
// 点击蒙版loading取消
const handleMaskClick = () => {
  isLoading.value = false
}
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  /* 蒙版 */
  background-color: rgba(0, 0, 0, 0.2);
  //   中心
  .main-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    .gif {
      width: 80px;
      height: 80px;
      margin-bottom: 8px;
    }
  }
}
.main-loading {
  width: 110px;
  height: 110px;
  background: url('@/assets/img/home/loading-bg.png');
  background-size: 110px 110px;
}
</style>
