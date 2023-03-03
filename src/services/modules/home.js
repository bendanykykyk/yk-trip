import { ykRequest } from '../request'

export const getHotSuggestion = (params) => {
  return ykRequest.get({
    url: '/home/hotSuggests',
    params
  })
}
