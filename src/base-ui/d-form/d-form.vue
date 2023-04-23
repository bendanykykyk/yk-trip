<template>
  <div class="form-container">
    <van-form
      v-bind="{
        'label-width': '100px',
        'label-align': 'left',
        'input-align': 'right',
        'show-error-message': false,
        ...processedFormConfig.attributes
      }"
    >
      <template v-for="config in processedFormConfig.fields" :key="config.key">
        <van-field
          :name="config.key"
          :label="config.label"
          v-bind="config.type == 'input' ? componentBind(config) : {}"
        >
          <!-- 除input外的官方组件 -->
          <template v-if="config.type !== 'input'" #input>
            <component
              :label="config.label"
              :is="formItemTypes[config.type] ?? formItemTypes.unknown(config)"
              v-bind="componentBind(config)"
            >
              <!-- 支持除input组件的插槽(得是官方的组件，自己封装的并不走这)-->
              <template
                v-for="[slotName, slotRender] in Object.entries(
                  config.slots ?? {}
                )"
                #[slotName]="scope"
                :key="slotName"
              >
                <component :is="slotRender(scope)"></component>
              </template>
            </component>
          </template>
          
          <!-- 支持input组件插槽-->
          <!-- TODO:这里不太好，但是v-for和if不能共存，之后想个办法优化一下  -->
          <template
            v-for="[slotName, slotRender] in Object.entries(config.slots || {})"
            #[slotName]
            :key="slotName"
          >
            <template v-if="config.type=='input'">
              <component :is="slotRender"></component>
            </template>
          </template>
        
        
        </van-field>
      </template>
    </van-form>
  </div>
</template>

<script lang="jsx" setup>
import { defineAsyncComponent, computed, ref } from 'vue'
import { _pxToVw } from '@/utils/format_unit'
import { watch } from 'vue'

// 1.定义所有组件类型
const unKnownComponent = ({ type }) => <span>未知类型{type}</span>
// 导入官方的组件，通过懒加载的方式,如果官方组件没有提供样式，就需要手动去@plugins/vant引入具体样式
const formItemTypes = {
  unknown: unKnownComponent,
  // 'd-input': defineAsyncComponent(() => import('./type-items/input/index.vue'))
  input: defineAsyncComponent(() => import('vant/es/field/index.mjs')),
  stepper: defineAsyncComponent(() => import('vant/es/stepper/index.mjs')),
  rate: defineAsyncComponent(() => import('vant/es/rate/index.mjs')),
  switch: defineAsyncComponent(() => import('vant/es/switch/index.mjs')),
  slider: defineAsyncComponent(() => import('vant/es/slider/index.mjs')),
  checkbox: defineAsyncComponent(() => import('./type-items/checkbox'))
}



// 2.定义组件props
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  },
  formConfig: {
    type: Object,
    default: () => ({})
  }
})

const formData = ref({ ...props.modelValue }) // 用于存储表单数据
const emit = defineEmits(['update:modelValue'])

// 处理component的v-bind
const componentBind = (config) => {
  const { key, props } = config
  return {
    ...props,
    config,
    // 实现component的双向绑定
    modelValue: formData.value[key],
    'onUpdate:modelValue': (val) => {
      formData.value[key] = val
      // 修改d-form组件v-model绑定的值
      emit('update:modelValue', formData.value)
    }
  }
}

// 3.二次处理config
const _processValue = (value) => {
  if (typeof value === 'string' && value.endsWith('_px')) {
    return _pxToVw(value)
  }
  // 可以增加其他处理
  else {
    return value
  }
}
// 二次处理绑定在form上的属性
const processAttributes = (attributes) => {
  return Object.keys(attributes).reduce((pre, key) => {
    // 处理_px结尾的属性
    const value = attributes[key]
    pre[key] = _processValue(value)

    return pre
  }, {})
}

// 处理props
const processFieldProps = (props,label) => {
  const newProps = Object.keys(props).reduce((pre, key) => {
    // 处理_px结尾的属性
    const value = props[key]
    pre[key] = _processValue(value)
    return pre
  }, {})

  // 给newProps内部增加placeholder属性,值根据label来
  if (!newProps.placeholder) {
    newProps.placeholder = `请输入${label}`
  }

  return newProps
}


const processFields = (fields) => {

  return fields.reduce((pre,field) => {
    const { props, label } = field

    // 如果选项隐藏的话就直接返回pre，就不需要处理了
    if (field.hide) return pre
    
    const newProps = processFieldProps(props, label)

    return pre.concat({
      ...field,
      props: newProps,

    })
  },[])
}
// 二次处理formConfig，并且不丧失响应式
const processedFormConfig = computed(() => {
  const { attributes, fields } = props.formConfig
  const newAttributes = processAttributes(attributes) // 目前就是处理了_px结尾的属性
  const newFields = processFields(fields) // 目前就是处理了fields 内 props下的_px结尾的属性

  return {
    attributes: newAttributes,
    fields: newFields
  }
})
</script>

<style lang="less" scoped>
:root {
  --root-width: 100px;
}

.fz {
  color: var(--primary-color);
  font-size: 20px;
}
</style>
