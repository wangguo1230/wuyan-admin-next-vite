import { defineComponent, onMounted, ref } from "vue"
import PageHeader from "@/components/PageHeader/PageHeader"
import PageBody from "@/components/PageBody/PageBody"
import "./index.scss"

function getHeight(item: { index: number; height: number }): number {
  return document.querySelector(`[data-index='${item.index}']`)?.scrollHeight ?? 0
}

export default defineComponent({
  props: {},
  setup() {
    const activeIndex = ref(1)
    // 宽度
    const width = screen.availWidth * 0.8 + "px"
    const height = screen.availHeight + "px"
    const dataIndexes = [
      { index: 0, height: 0 },
      { index: 1, height: 0 },
      { index: 2, height: 0 },
    ]
    const menuClick = (index: number) => {
      activeIndex.value = index
      console.log(dataIndexes[1].height)
      window.scrollTo(0, dataIndexes[1].height)
    }

    window.addEventListener("scroll", () => {
      const scrollLocation =
        document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      dataIndexes.forEach((item) => {
        if (scrollLocation > item.height) {
          activeIndex.value = item.index
        }
      })
    })

    onMounted(() => {
      dataIndexes.map((item, index) => {
        let prevHeight = 0
        const prevObj = dataIndexes[index - 1]
        if (prevObj) {
          prevHeight = getHeight(prevObj)
        }
        item.height = getHeight(item) + prevHeight
        return item
      })
      console.log("mounted", dataIndexes)
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
