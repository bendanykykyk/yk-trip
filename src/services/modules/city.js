import { ykRequest } from '../request'

export const getAllCity = (params) => {
  return ykRequest.get({
    url: '/city/all',
    params
  })
}
