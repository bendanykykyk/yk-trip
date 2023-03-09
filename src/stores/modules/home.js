import { getCategories, getHotSuggestion } from '@/services/modules/home'
import { getRooms } from '@/services/modules/room'
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggestion: [],

    categories: [],

    rooms: [],
    currentRoomPage: 1
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
    },
    async fetchRooms() {
      const res = await getRooms({ page: this.currentRoomPage })
      this.rooms.push(...res.data)
      this.currentRoomPage++
    }
  }
})
