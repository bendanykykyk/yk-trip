<template>
  <div class="data-form-container">
    <d-form ref="form" v-model="formModel" :form-config="formConfig"> </d-form>
    <button @click="handleHideInput">隐藏</button>
  </div>
</template>
<script lang="jsx" setup>
import { _pxToVw } from '@/utils/format_unit'
import { ref } from 'vue'
const formModel = ref({
  type:2,// 1:隐藏input
  // name: 'yk',
  // count:2
})

const handleHideInput = () => {
  // formModel.value.type==1 // 因为hide函数并不会因为内部的值改变而重新执行，所以需要手动去修改hide的值。
  formConfig.value.fields[0].hide = !formConfig.value.fields[0].hide
}

const formConfig = ref({
  attributes: {},
  fields: [
    {
      type: 'input',
      key: 'name',
      label: '姓名',
      // 直接走官方的组件
      props: {},
      slots: {
        button: () => {
          return (
            <van-button size="mini" type="primary">
              发送短信
            </van-button>
          )
        }
      },
      hide: formModel.value.type == 1
    },
    {
      type: 'stepper',
      key: 'count',
      label: '数量',
      props: {},
      events: {}
    },
    {
      type: 'rate',
      key: 'rate',
      label: '评分',
      props: {},
      events: {}
    },
    {
      type: 'switch',
      key: 'isShow',
      label: '是否显示',
      props: {
        'active-value': 1,
        'inactive-value': 0
      },
      events: {}
    },
    {
      type: 'slider',
      key: 'percent',
      label: '百分比',
      props: {
        'bar-height': '10_px',
        'button-size': '18_px'
      },
      slots: {
        button: () => {
          return <span>滑</span>
        }
      },
      events: {}
    },
    {
      type: 'checkbox',
      key: 'hobbies',
      label: '爱好',
      options: () => {
        return hobbies.value
      },
      slots: {},
      props: {
        direction: 'horizontal', // 预设
        max: 2,
        extendProps: {
          shape: 'round' // 预设
        }
      },
      events: {}
    }
  ]
})

// 模拟异步获取数据
let hobbies = ref([])

const getDetails = () => {
  setTimeout(() => {
    hobbies.value = [
      { label: '吃饭', value: 1 },
      { label: '睡觉', value: 2 },
      { label: '打豆豆', value: 3 }
    ]
  }, 200)
}
getDetails()
</script>

<style lang="less" scoped></style>
