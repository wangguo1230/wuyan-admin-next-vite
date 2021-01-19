import { MessageApi } from 'ant-design-vue/lib/message'
// declare module '*.vue' {
//   import { defineComponent } from 'vue'
//   const component: ReturnType<typeof defineComponent>
//   export default component
// }

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $message: MessageApi
  }
}
