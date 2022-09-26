import { Menu, BrowserWindow, dialog } from 'electron'
import type { MenuItemConstructorOptions } from 'electron'

const isMac = process.platform === 'darwin'

const template: MenuItemConstructorOptions[] = [
  {
    label: '文件',
    submenu: [
      {
        label: '打开文件夹',
        click: async (menuItem, browserWindow) => {
          const { filePaths } = await dialog.showOpenDialog(
            browserWindow as BrowserWindow,
            { properties: ['openDirectory'] }
          )
          if (filePaths[0]) {
            browserWindow?.webContents.send('openFolder', filePaths[0])
          }
        },
      },
      isMac
        ? { label: '退出', role: 'close' }
        : { label: '退出', role: 'quit' },
    ],
  },
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
