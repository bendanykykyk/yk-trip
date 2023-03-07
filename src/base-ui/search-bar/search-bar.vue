<template>
  <div class="search-bar-container">
    <div class="select-time">
      <div class="startTime time">
        <span>住</span>
        <span>{{ startTime }}</span>
      </div>
      <div class="endTime time">
        <span>离</span>
        <span>{{ endTime }}</span>
      </div>
    </div>
    <div class="search-input">
      <van-search disabled v-model="value" placeholder="关键词/位置/民宿" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  startTime: {
    type: String,
    default: '01-01'
  },
  endTime: {
    type: String,
    default: '01-02'
  }
})
</script>

<style lang="less" scoped>
.search-bar-container {
  --van-search-padding: 0px;
  background-color: var(--shallow-gray-color);
}

.search-bar-container {
  display: flex;
  border-radius: 20px;
  height: 100%;
  overflow: hidden;
  align-items: center;
  .select-time {
    width: 80px;
    text-align: center;
    .endTime {
      span:nth-child(2) {
        position: relative;
        &::after {
          content: ' ';
          width: 0;
          height: 0;
          border: 4px solid #666;
          border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
          -webkit-border-radius: 3px;
          border-radius: 3px;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
          position: absolute;
          bottom: 0px;
          right: -12px;
        }
      }
    }
  }
  .time {
    span:nth-child(1) {
      color: var(--gray-color);
    }
    span:nth-child(2) {
      margin-left: 5px;
      color: var(--primary-gray-color);
    }
  }
  .search-input {
    flex: 1;
  }
}
</style>
