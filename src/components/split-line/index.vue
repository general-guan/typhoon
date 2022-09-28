<template>
  <div
    class="splitLineContainer"
    ref="splitLineContainerRef"
    @mousedown="splitLineMouseDown"
    style="flex-shrink: 0"
  >
    <div
      class="splitLine"
      :class="{ splitLineMoveClass: splitLineIsFocus }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStore } from '../../store/index'
import { throttle } from '../../utils'

const use_store = useStore()

const splitLineIsFocus = ref<boolean>(false)
const splitLineContainerRef = ref()

/**
 * 分割线鼠标按下
 */
const splitLineMouseDown = () => {
  splitLineIsFocus.value = true
  const appDiv = document.getElementById('app') as HTMLElement
  appDiv.style.userSelect = 'none'
}

/**
 * 分割线移动
 */
const splitLineMouseMove = (e: MouseEvent) => {
  if (splitLineIsFocus.value) {
    use_store.setMenuWidth(
      e.clientX - splitLineContainerRef.value.offsetWidth / 2
    )
  }
}

/**
 * 移动节流
 */
const throttleSplitLineMouseMove = throttle(splitLineMouseMove, 20, {
  leading: true,
})

/**
 * 分割线鼠标抬起
 */
const splitLineMouseUp = () => {
  splitLineIsFocus.value = false
  const appDiv = document.getElementById('app') as HTMLElement
  appDiv.style.userSelect = ''
}

onMounted(() => {
  document.addEventListener('mousemove', throttleSplitLineMouseMove)
  document.addEventListener('mouseup', splitLineMouseUp)
})
</script>

<style>
.splitLineContainer {
  width: 4px;
  cursor: ew-resize;
}
/* TODO delay */
.splitLineContainer:hover .splitLine {
  background-color: #1871ff;
  width: 4px;
}
.splitLine {
  width: 1px;
  margin: 0 auto;
  background-color: #cacdd1;
  height: 100%;
}
.splitLine.splitLineMoveClass {
  background-color: #1871ff;
  width: 4px;
}
</style>
