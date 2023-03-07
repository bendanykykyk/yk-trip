import { defineStore } from 'pinia'
import { $dayjs } from '@/utils/format_date'
// 选择日期
const startDate = new Date()
const endDate = $dayjs(new Date()).add(1, 'day')
export const useMainStore = defineStore('main', {
  state: () => ({
    startTime: startDate,
    endTime: endDate
  }),

  actions: {}
})
