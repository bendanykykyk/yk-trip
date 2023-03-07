import { onUnmounted, onMounted, onActivated, onDeactivated, ref } from 'vue'
import { throttle } from 'lodash'
export function useScroll() {
  let isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollHeight = ref(0)
  const scrollTop = ref(0)

  const scrollHandler = () => {
    clientHeight.value = document.documentElement.clientHeight
    scrollHeight.value = document.documentElement.scrollHeight
    scrollTop.value = document.documentElement.scrollTop
    console.log('我出发啦')
    if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
      isReachBottom.value = true
    }
  }
  // 节流
  const throttleScrollHandler = throttle(scrollHandler, 200)

  onMounted(() => {
    window.addEventListener('scroll', throttleScrollHandler)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', throttleScrollHandler)
  })
  onActivated(() => {
    window.addEventListener('scroll', throttleScrollHandler)
  })
  onDeactivated(() => {
    window.removeEventListener('scroll', throttleScrollHandler)
  })

  return { isReachBottom, scrollTop }
}
