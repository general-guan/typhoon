import { defineStore } from 'pinia'
import { ref } from 'vue'

type State = {
  menuWidth: number
  articleContent: string
  fileList: string[]
  rootUrl: string
}

export const useStore = defineStore({
  id: 'main',
  state: (): State => {
    return { menuWidth: 200, articleContent: '', fileList: [], rootUrl: '' }
  },
  actions: {
    setMenuWidth(width: number) {
      this.menuWidth = width
    },

    setArticleContent(content: string) {
      this.articleContent = content
    },

    setFileList(list: string[]) {
      this.fileList = list
    },

    setRootUrl(url: string) {
      this.rootUrl = url
    },
  },
})
