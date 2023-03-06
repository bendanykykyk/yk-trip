<template>
  <div class="a">
    order
    <!-- <B></B> -->

    <template v-for="(info, index) in pageInfo" :key="index">
      <component :is="info.name"></component>
    </template>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
// 注册组件
const cpnModules = import.meta.glob('./cpns/*.vue')
const components = {}
for (const path in cpnModules) {
  const name = path.split('/')[2].split('.')[0]
  // console.log(name)
  components[name] = defineAsyncComponent(() => cpnModules[path]())
}
// const pageInfo = [{ name: 'B', config: { color: '#F00' } }] => 变成下面这样
const pageInfo = [
  { name: components['B'], config: { color: '#F00' } },
  { name: components['C'], config: { color: '#F00' } }
]
</script>

<style lang="less" scoped>
.a {
  color: red;
  .b {
    color: green;
  }
}
</style>
