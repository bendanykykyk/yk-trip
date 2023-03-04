<template>
  <div>
    <component
      v-for="(info, index) in pageInfo"
      :key="index"
      :is="info.name"
      :config="info.config"
    />
  </div>
</template>

<script setup>
import { defineAsyncComponent, defineExpose } from 'vue'

const cpnModules = import.meta.glob('./cpns/*.vue')
const components = {}

for (const path in cpnModules) {
  components[path] = defineAsyncComponent(() => cpnModules[path]())
}

defineExpose({ components }) // 将 components 暴露给模板中的代码使用
const pageInfo = [{ name: 'A', config: { color: '#FF0' } }]
</script>
