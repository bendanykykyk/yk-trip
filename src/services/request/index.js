import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'
import { useMainStore } from '@/stores/modules/main'
const mainStore = useMainStore()

class YKRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use((config) => {
      const { isLoadingShow } = config
      // 额外操作
      isLoadingShow && (mainStore.isLoading = true)
      return config
    })
    this.instance.interceptors.response.use(
      (res) => {
        mainStore.isLoading = false
        return res
      },
      (err) => {
        mainStore.isLoading = false
        return err
      }
    )
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

// const ykRequestMock = new YKRequest(MOCK_BASE_URL, TIMEOUT)
const ykRequest = new YKRequest(BASE_URL, TIMEOUT)
export { ykRequest }
