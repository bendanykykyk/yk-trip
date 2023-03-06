<template>
  <div class="search-container">
    <div>开始时间：{{ $route.query.startTime }}</div>
    <div>结束时间：{{ $route.query.endTime }}</div>
    <div>所在城市:{{ $route.query.cityName }}</div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped></style>
