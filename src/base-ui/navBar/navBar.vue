<template>
  <div class="nav-bar">
    <van-nav-bar v-bind="$attrs" />
  </div>
</template>

<script setup>
// const onClickLeft = () => history.back()
</script>

<style lang="less" scoped>
.nav-bar {
  :deep(.van-nav-bar__title) {
    color: var(--primary-color);
  }
  :deep(.van-nav-bar__title) {
    font-weight: 400;
  }
}
</style>
