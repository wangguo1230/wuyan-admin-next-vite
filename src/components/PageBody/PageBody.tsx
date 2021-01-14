import { defineComponent,Fragment } from "vue"
import "./index.scss"
export default defineComponent({
  props: { },
  setup() {
    return () => (
      <div>
        <div class="wu-flex wu-body" data-index="1">
          <div class="wu-body_left">
            <h1>让H5制作，更方便</h1>
            <p>
              H5-Dooring是一款功能强大，高可扩展的H5可视化页面配置解决方案，致力于提供一套简单方便、专业可靠、无限可能的H5落地页最佳实践。
            </p>
          </div>
          <div class="wu-body_right flex-1">
            <img src="/_right.png" />
          </div>
        </div>
        <div data-index="2">
          拉拉
        </div>
      </div>
    )
  },
})
