import { defineComponent, ref } from "vue"
import PageHeader from "@/components/PageHeader/PageHeader"
import PageBody from "@/components/PageBody/PageBody"
import "./index.scss"
export default defineComponent({
  props: {},
  setup() {
    const activeIndex = ref(1)
    // 宽度
    const width = screen.availWidth * 0.8 + "px"
    const height = screen.availHeight + "px"
    const menuClick = (index: number) => {
      activeIndex.value = index
      console.log(activeIndex)
    }
    const dataIndexes = [1, 2]
    window.addEventListener("scroll", () => {
      const scrollLocation =
        document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      dataIndexes.forEach((item) => {
        
      })
      document.querySelector(".wu-body")!.clientHeight
    })

    return () => (
      <div class="wu-bg">
        <div class="wu-wrapper" style={{ width: width, height: height }}>
          <PageHeader activeIndex={activeIndex.value} onMenuClick={menuClick}></PageHeader>
          <PageBody></PageBody>
        </div>
      </div>
    )
  },
})
