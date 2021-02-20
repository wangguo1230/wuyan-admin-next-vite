import { Button, Col, Form, Input, message, Row, Spin } from "ant-design-vue"
import { WTable } from "@/components"
import type { App } from "vue"

export function useComponents(app: App): App {
  const components = [Button, Col, Form, Row, Input, Spin, WTable]
  components.forEach((component) => app.use(component))
  app.config.globalProperties.$message = message
  return app
}
