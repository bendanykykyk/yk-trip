import { getHotSuggestion } from '@/services/modules/home'
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggestion: []
  }),

  actions: {
    async fetchHotSuggestion() {
      const res = await getHotSuggestion()
      this.hotSuggestion = res.data
    }
  }
})
