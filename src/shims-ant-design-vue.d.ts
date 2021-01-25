import { MessageApi } from "ant-design-vue/lib/message"

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $message: MessageApi
  }
}
