import { ykRequest } from '../request'

export const getHotSuggestion = (params) => {
  return ykRequest.get({
    url: '/home/hotSuggests',
    params
  })
}

export const getCategories = (params) => {
  return ykRequest.get({
    url: '/home/categories',
    params
  })
}
