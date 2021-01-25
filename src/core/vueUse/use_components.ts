import { Button, Col, Form, Input, message, Row, Spin } from "ant-design-vue"
import type { App } from "vue"

export function useComponents(app: App) {
  const components = [Button, Col, Form, Row, Input,Spin]
  components.forEach((component) => app.use(component))
  app.config.globalProperties.$message = message
  return app
}
