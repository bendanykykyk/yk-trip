<template>
  <div :style="{ color: config.color }">
    <!-- 组件内容 -->
    A123123
  </div>
</template>

<script setup>
defineProps({
  config: {
    type: Object,
    default: () => ({})
  }
})
</script>
