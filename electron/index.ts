import { app, BrowserWindow } from 'electron'
import path from 'path'
import './menu'

const createWindow = () => {
  const mainWindow: BrowserWindow = new BrowserWindow({
    width: 1600,
    height: 960,
    webPreferences: {
      devTools: true,
      contextIsolation: false,
      // 允许html页面上的javaScript代码访问nodejs 环境api代码的能力（与node集成的意思）
      nodeIntegration: true,
      // preload: path.join(__dirname, 'preload.js'),
    },
  })

  // 加载 index.html
  // mainWindow.loadFile('index.html')
  if (app.isPackaged) {
    mainWindow.loadURL(path.join(__dirname, '../index.html'))
  } else {
    mainWindow.loadURL(`${process.env['VITE_DEV_SERVER_URL']}`)
  }

  // 打开开发工具
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
