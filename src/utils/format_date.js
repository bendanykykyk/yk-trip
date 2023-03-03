import dayjs from 'dayjs'

/**
 * @description: 格式化日期
 * @param {*} date new Date
 * @param {*} formatStr 填具体数据格式 YYYY MM DD hh mm ss
 * @return {*}
 */
export function format_date(date, formatStr = 'MM月DD日') {
  return dayjs(date).format(formatStr)
}

/**
 * @description: 获得两个日期的时间差
 * @param {*} startDate
 * @param {*} endDate
 * @return {*}
 */
export function get_date_diff(startDate, endDate) {
  console.log(dayjs(endDate).diff(startDate, 'day'))
  return dayjs(endDate).diff(startDate, 'day')
}

export let $dayjs = dayjs
