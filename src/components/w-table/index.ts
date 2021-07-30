import { App, Plugin } from "vue"
import WTable from "./table"

WTable.install = function (app: App): App {
  app.component(WTable.name, WTable)
  return app
}

export default WTable as typeof WTable & Plugin
