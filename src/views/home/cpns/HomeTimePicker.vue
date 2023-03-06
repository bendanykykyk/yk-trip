<template>
  <div class="home-time-picker-container">
    <div class="time-picker" @click="timePickerClick">
      <div class="start-time">
        <div class="week-name">周六</div>
        <div>{{ startTimeStr }}</div>
      </div>
      <div class="stay">共{{ stayTime }}晚</div>
      <div class="end-time">
        <div class="week-name">周日</div>
        <div>{{ endTimeStr }}</div>
      </div>
    </div>

    <van-calendar
      class="my-calendar"
      v-model:show="isCalendarShow"
      color="#ff9854"
      :round="false"
      type="range"
      @confirm="onConfirm"
      :style="{ height: '100%' }"
    />
  </div>
</template>

<script setup>
import { ref, computed, toRefs } from 'vue'
import { format_date, get_date_diff } from '@/utils/format_date'
import { useHomeStore } from '@/stores/modules/home'
// 选择日期

// 获取home里的startTime和endTime
const homeStore = useHomeStore()
const { startTime, endTime } = toRefs(homeStore)

const stayTime = computed(() => get_date_diff(startTime.value, endTime.value))

const startTimeStr = computed(() => format_date(startTime.value))
const endTimeStr = computed(() => format_date(endTime.value))

const timePickerClick = () => {
  isCalendarShow.value = true
}
// 日历弹窗
const isCalendarShow = ref(false)

const onConfirm = (range) => {
  const [pickedStartTime, pickedEndTime] = range
  startTime.value = pickedStartTime
  endTime.value = pickedEndTime
  isCalendarShow.value = false
}
</script>

<style lang="less" scoped>
.time-picker {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: var(--primary-gray-color);
  .start-time {
  }
  .stay {
  }
  .end-time {
  }
  .week-name {
    color: var(--gray-color);
  }
}
</style>
