<template>
  <div
    style="display: flex; height: 100vh"
    @mousemove="splitLineMouseMove"
    @mouseup="splitLineMouseUp"
  >
    <ul style="flex-shrink: 0" :style="{ width: ulWidth + 'px' }">
      <li v-for="item in fileList" @click="openFiles(item)">{{ item }}</li>
    </ul>

    <div
      ref="splitLineRef"
      class="splitLine"
      @mousedown="splitLineMouseDown"
      style="flex-shrink: 0"
      v-if="fileList.length"
    ></div>

    <div style="height: 100%; overflow: auto">
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ipcRenderer } from 'electron'
import { ref } from 'vue'
import fs from 'fs'

// 文件列表
const root = ref<string>('')
const fileList = ref<string[]>([])
const content = ref<string>('')
const ulWidth = ref<number>(300)
const splitLineIsFocus = ref<boolean>(false)
const splitLineRef = ref(null)

ipcRenderer.on('openFolder', (_, data) => {
  root.value = data
  fileList.value = fs.readdirSync(data)
})

const openFiles = (item: string) => {
  fs.readFile(root.value + '\\' + item, (err, data) => {
    content.value = data.toString()
  })
}

const splitLineMouseDown = (e) => {
  splitLineIsFocus.value = true
  // console.log(e)
}
const splitLineMouseMove = (e) => {
  if (splitLineIsFocus.value) {
    ulWidth.value = e.clientX - splitLineRef.value.offsetWidth / 2

    console.log(ulWidth.value)
  }
}
const splitLineMouseUp = (e) => {
  splitLineIsFocus.value = false
}
</script>

<style>
.splitLine {
  width: 20px;
  background-color: #ccc;
  height: 100%;
}
.splitLine:hover {
  cursor: ew-resize;
}
</style>
