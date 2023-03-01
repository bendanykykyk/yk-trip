<template>
  <div class="tabbar-container">
    <template v-for="(tab, index) in tabbarData" :key="tab.text">
      <div class="tabbar-item" @click="handleTabItemClick(tab, index)">
        <div class="icon">
          <img
            class="image"
            :src="
              requireResource(
                activeIndex === index ? tab.imageActive : tab.image
              )
            "
            alt=""
          />
        </div>
        <div class="text" :class="activeIndex === index ? 'active' : ''">
          {{ tab.text }}
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { requireResource } from '@/utils/load_assets'
import { useRouter } from 'vue-router'
defineProps({
  tabbarData: {
    type: Array,
    default() {
      return []
    }
  }
})

const router = useRouter()
const activeIndex = ref(0)

const handleTabItemClick = (item, index) => {
  activeIndex.value = index
  router.push(item.path)
}
</script>

<style lang="less" scoped>
.active {
  color: var(--primary-color);
}
.tabbar-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55px;

  display: flex;
  border-top: 1px solid #f5f5f6;
  .tabbar-item {
    flex: 1;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    .icon {
      font-size: 12px;
      .image {
        width: 36px;
      }
    }
    .text {
      margin-top: 5px;
      font-size: 12px;
    }
  }
}
</style>
