import { getCategories, getHotSuggestion } from '@/services/modules/home'
import { defineStore } from 'pinia'
import { $dayjs } from '@/utils/format_date'
// 选择日期
const startDate = new Date()
const endDate = $dayjs(new Date()).add(1, 'day')

export const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggestion: [],

    startTime: startDate,
    endTime: endDate,

    categories: []
  }),
  getters: {},

  actions: {
    async fetchHotSuggestion() {
      const res = await getHotSuggestion()
      this.hotSuggestion = res.data
    },
    async fetchCategories() {
      const res = await getCategories({ page: 1 })
      this.categories = res.data
    }
  }
})
