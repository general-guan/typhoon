<template>
  <div
    ref="containRef"
    style="display: flex; height: 100vh"
    @mouseup="splitLineMouseUp"
    @mousemove="throttleSplitLineMouseMove"
  >
    <ul
      style="flex-shrink: 0; background-color: #f3feb0"
      :style="{ width: ulWidth + 'px' }"
    >
      <li v-for="item in fileList" @click="openFiles(item)">{{ item }}</li>
    </ul>

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

    <div style="height: 100%; overflow: auto; padding: 20px 30px">
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ipcRenderer } from 'electron'
import { ref } from 'vue'
import fs from 'fs'
import { throttle } from './utils'

// 文件列表
const root = ref<string>('')
const fileList = ref<string[]>([])
const content = ref<string>('')
const ulWidth = ref<number>(300)
const splitLineIsFocus = ref<boolean>(false)
const splitLineContainerRef = ref()
const containRef = ref()

ipcRenderer.on('openFolder', (_, data) => {
  root.value = data
  fileList.value = fs.readdirSync(data)
})

const openFiles = (item: string) => {
  fs.readFile(root.value + '\\' + item, (err, data) => {
    content.value = data.toString()
    console.log(content.value)
  })
}

/**
 * 分割线鼠标按下
 */
const splitLineMouseDown = () => {
  splitLineIsFocus.value = true
  containRef.value.style.userSelect = 'none'
}

/**
 * 分割线移动
 */
const splitLineMouseMove = (e: MouseEvent) => {
  if (splitLineIsFocus.value) {
    ulWidth.value = e.clientX - splitLineContainerRef.value.offsetWidth / 2
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
  containRef.value.style.userSelect = ''
}
</script>

<style>
.splitLineContainer {
  width: 4px;
  cursor: ew-resize;
}
/* TODO deley */
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
