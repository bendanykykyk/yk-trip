<template>
  <div class="house-item-v3-container">
    <div class="inner-item">
      <!-- 背景图 -->
      <div class="cover">
        <van-image class="image" :src="info?.image?.url"></van-image>
      </div>
      <!-- 文字说明 -->
      <div class="info">
        <div class="location">
          <van-image
            class="image"
            :src="requireResource('home/location.png')"
          ></van-image>
          <span>{{ info.location }}</span>
        </div>
        <div class="address my-text-3">
          {{ info.houseName }}
        </div>
        <div class="bottom">
          <span class="final-price">${{ info.finalPrice }}</span>
          <span class="origin-price">${{ info.productPrice }}</span>
          <span
            class="coupon"
            :style="{
              color: info.priceTipBadge.color,
              background: 'linear-gradient(90deg, #fa8c1d, #fcaf3f)'
            }"
            >{{ info.priceTipBadge.text }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { requireResource } from '@/utils/load_assets'

defineProps({
  info: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.house-item-v3-container {
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
      padding: 10px 5px;
      width: 100%;
      box-sizing: border-box;
      .location {
        display: flex;
        color: var(--primary-gray-color);
        .image {
          width: 16px;
          height: auto;
        }
      }
      .bottom {
        margin-top: 5px;
        .final-price {
          color: var(--primary-color);
        }
        .origin-price {
          text-decoration: line-through;
          color: var(--gray-color);
        }
        .coupon {
          padding: 2px;
          border-radius: 5px;
          margin-left: 10px;
        }
      }
    }
  }
  // border-radius: 6px;
}
</style>
