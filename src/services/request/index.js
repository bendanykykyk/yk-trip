import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'

class YKRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
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
