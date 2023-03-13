import { onUnmounted, onMounted, onActivated, onDeactivated, ref } from 'vue'
import { throttle } from 'lodash'
export function useScroll(elRef) {
  let el = window

  let isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollHeight = ref(0)
  const scrollTop = ref(0)

  const scrollHandler = () => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight
      scrollHeight.value = document.documentElement.scrollHeight
      scrollTop.value = document.documentElement.scrollTop
    } else {
      // console.log(el.clientHeight, el.offsetHeight)
      clientHeight.value = el.clientHeight
      scrollHeight.value = el.scrollHeight
      scrollTop.value = el.scrollTop
    }

    console.log('我在滚啦')
    if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
      console.log('我到底啦')
      isReachBottom.value = true
    }
  }
  // 节流
  const throttleScrollHandler = throttle(scrollHandler, 200)

  onMounted(() => {
    if (elRef) {
      el = elRef.value
    }
    el.addEventListener('scroll', throttleScrollHandler)
  })
  onUnmounted(() => {
    el.removeEventListener('scroll', throttleScrollHandler)
  })
  onActivated(() => {
    el.addEventListener('scroll', throttleScrollHandler)
  })
  onDeactivated(() => {
    el.removeEventListener('scroll', throttleScrollHandler)
  })

  return { isReachBottom, scrollTop }
}
