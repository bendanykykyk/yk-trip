<template>
  <div class="room_02-brief-container">
    <div class="brief">
      <div class="title">{{ briefData.houseName }}</div>
      <div class="tags">
        <template
          v-for="(label, index) in briefData.houseTags.filter(
            (item) => item.tagText
          )"
          :key="index"
        >
          <span class="tag">{{ label?.tagText?.text }}</span>
        </template>
      </div>
      <div class="comment">
        <div class="left">
          <div class="score">{{ briefData.commentBrief.overall }}</div>
          <div class="rate">{{ briefData.commentBrief.scoreTitle }}</div>
          <div class="com">{{ briefData.commentBrief.commentBrief }}</div>
        </div>
        <div class="right">
          {{ briefData.commentBrief.totalCount }}条评论
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="address">
        <div class="left">
          <div class="address-name">{{ briefData.nearByPosition.address }}</div>
        </div>
        <div class="right">
          地图周边
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  briefData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.room_02-brief-container {
  padding: 20px;
  .brief {
    .title {
      font-size: 18px;
      // font-weight: var(--font-weight-bold);
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      .tag {
        display: inline-block;
        padding: 3px;
        background-color: #fff0e5;
        color: var(--primary-color);
        margin-right: 8px;
        margin-top: 10px;
      }
    }
    .comment {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 10px;
      margin-top: 10px;
      border-radius: 10px;
      background-color: #f6f7fa;

      .left {
        flex: 1;
        display: flex;
        align-items: center;
        .score {
          font-size: 15px;
          font-weight: var(--font-weight-bold);
        }
      }
      .right {
        color: var(--primary-color);
      }
    }
    .address {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 10px;
      margin-top: 10px;
      border-radius: 10px;
      background-color: #f6f7fa;

      .left {
        flex: 1;
        display: flex;
        align-items: center;
        .address-name {
          font-size: 15px;
          font-weight: var(--font-weight-bold);
        }
      }
      .right {
        color: var(--primary-color);
      }
    }
  }
}
</style>
