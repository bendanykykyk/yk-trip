import { getAllCity } from '@/services/modules/city'
import { defineStore } from 'pinia'

export const useCityStore = defineStore('city', {
  state: () => ({
    cities: {},
    currentCity: {
      cityName: '广州'
    }
  }),

  actions: {
    async fetchAllCities() {
      const res = await getAllCity()
      this.cities = res.data
    }
  }
})
