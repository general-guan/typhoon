import { app, Menu, shell } from 'electron'
import type { MenuItemConstructorOptions } from 'electron'

const isMac = process.platform === 'darwin'

const template: MenuItemConstructorOptions[] = [
  {
    label: '文件',
    submenu: [
      isMac
        ? { label: '退出', role: 'close' }
        : { label: '退出', role: 'quit' },
    ],
  },
  {
    label: '帮助',
    submenu: [
      {
        label: '今晚打老虎',
        click: async () => {
          await shell.openExternal('https://www.baidu.com')
        },
      },
    ],
  },
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
