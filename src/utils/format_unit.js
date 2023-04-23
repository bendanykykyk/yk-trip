// value必须是字符串，且必须以_px结尾，不然只会正常返回
export const _pxToVw = (value) => {
  if (typeof value === 'string' && value.includes('_px')) {
    let px = value.split('_px')[0]
    return `${(px / 375) * 100}vw`
  } else {
    return value
  }
}
