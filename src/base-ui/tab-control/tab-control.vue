<template>
  <van-tabs v-model:active="active" @change="onChange">
    <!-- <template v-if="data.length > 0"> -->
    <van-tab v-for="(item, index) in data" :title="item" :key="index"></van-tab>
    <!-- </template> -->
  </van-tabs>
</template>
<script setup>
import { ref } from 'vue'

let active = ref() // number or string
defineProps({
  config: {
    type: Object,
    default: () => ({})
  },
  //   ['titleA','titleB']
  data: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['onTabClick'])
const onChange = (...rest) => {
  emit('onTabClick', ...rest)
}
</script>

<style lang="less" scoped></style>
