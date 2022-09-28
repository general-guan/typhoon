<template>
  <ul
    style="flex-shrink: 0; background-color: #f3feb0"
    :style="{ width: use_store.menuWidth + 'px' }"
  >
    <li v-for="item in use_store.fileList" @click="openFiles(item)">
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ipcRenderer } from 'electron'
import { useStore } from '../../store/index'
import fs from 'fs'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const use_store = useStore()

ipcRenderer.on('openFolder', (_, data) => {
  use_store.setRootUrl(data)
  use_store.setFileList(fs.readdirSync(data))
})

const openFiles = (item: string) => {
  fs.readFile(use_store.rootUrl + '\\' + item, (err, data) => {
    // var rendererMD = new marked.Renderer()
    // marked.setOptions({
    //   renderer: rendererMD,
    //   highlight: function (code: string) {
    //     return hljs.highlightAuto(code).value
    //   },
    //   pedantic: false,
    //   gfm: true,
    //   tables: true,
    //   breaks: false,
    //   sanitize: false,
    //   smartLists: true,
    //   smartypants: false,
    //   xhtml: false,
    // })
    // content.value = marked(data.toString())

    // console.log(marked.parse(data.toString()))

    use_store.setArticleContent(marked.parse(data.toString()))
    console.log(use_store.articleContent)
  })
}
</script>
