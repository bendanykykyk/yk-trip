import { ykRequest } from '../request'

export const getRooms = (params) => {
  return ykRequest.get({
    url: '/home/houselist',
    params,
    isLoadingShow: true
  })
}

export function getRoomDetail(params) {
  return ykRequest.get({
    url: '/detail/infos',
    method: 'get',
    params
  })
}
