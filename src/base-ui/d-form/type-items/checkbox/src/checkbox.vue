<template>
  <div class="checkbox-container">
    <!-- 控制外层的属性在props中 -->
    <van-checkbox-group
      v-bind="config.props"
      :model-value="modelValue"
      @update:modelValue="onDataChange"
    >
      <template v-for="option in config.options()" :key="option.key">
        <!-- 控制内层的属性在props.innerProps中  -->
        <van-checkbox v-bind="config.props.extendProps" :name="option.value">
          {{ option.label }}
        </van-checkbox>
      </template>
    </van-checkbox-group>
  </div>
</template>

<script setup>
// 为什么不在组件内设置预设？因为这只针对于自己写的组件，如果是官方组件，就设置不了了


const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  config: {
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['update:modelValue'])

const onDataChange = (val) => {
  // _value.value = val
  emit('update:modelValue', val)
}
</script>

<style lang="less" scoped></style>
