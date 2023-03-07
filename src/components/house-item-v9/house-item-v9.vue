<template>
  <div class="house-item-v9-container">
    <div class="inner-item">
      <!-- 背景图 -->
      <div class="cover">
        <van-image class="image" :src="info.image.url"></van-image>
      </div>
      <!-- 文字说明 -->
      <div class="info">
        <div class="room-info my-text-3">{{ info.houseName }}</div>
        <div class="comment">
          <van-rate
            :model-value="Number(info.commentScore)"
            color="#FFF"
            size="10px"
            readonly
          />
          <span>${{ info.finalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  info: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.house-item-v9-container {
  width: 50%;

  box-sizing: border-box;
  .inner-item {
    margin: 5px;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    .cover {
      .image {
      }
    }
    .info {
      position: absolute;
      bottom: 0;
      z-index: 10;
      padding: 10px;
      color: #fff;
      width: 100%;
      box-sizing: border-box;
      .comment {
        display: flex;
        justify-content: space-between;
        align-items: center;
        // width: 100%;
      }
    }
  }
  // border-radius: 6px;
}
</style>
