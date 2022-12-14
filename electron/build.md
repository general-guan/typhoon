## nsis 配置详解

```json
{
  "oneClick": false, // 创建一键安装程序还是辅助安装程序（默认是一键安装）
  "allowElevation": true, // 是否允许请求提升，如果为false，则用户必须使用提升的权限重新启动安装程序 （仅作用于辅助安装程序）
  "allowToChangeInstallationDirectory": true, // 是否允许修改安装目录 （仅作用于辅助安装程序）
  "installerIcon": "public/timg.ico", // 安装程序图标的路径
  "uninstallerIcon": "public/timg.ico", // 卸载程序图标的路径
  "installerHeader": "public/timg.ico", // 安装时头部图片路径（仅作用于辅助安装程序）
  "installerHeaderIcon": "public/timg.ico", // 安装时标题图标（进度条上方）的路径（仅作用于一键安装程序）
  "installerSidebar": "public/installerSiddebar.bmp", // 安装完毕界面图片的路径，图片后缀.bmp，尺寸164*314 （仅作用于辅助安装程序）
  "uninstallerSidebar": "public/uninstallerSiddebar.bmp", // 开始卸载界面图片的路径，图片后缀.bmp，尺寸164*314 （仅作用于辅助安装程序）
  "uninstallDisplayName": "${productName}${version}", // 控制面板中的卸载程序显示名称
  "createDesktopShortcut": true, // 是否创建桌面快捷方式
  "createStartMenuShortcut": true, // 是否创建开始菜单快捷方式
  "shortcutName": "SHom", // 用于快捷方式的名称，默认为应用程序名称
  "include": "script/installer.nsi", // NSIS包含定制安装程序脚本的路径，安装过程中自行调用  (可用于写入注册表 开机自启动等操作)
  "script": "script/installer.nsi", // 用于自定义安装程序的NSIS脚本的路径
  "deleteAppDataOnUninstall": false, // 是否在卸载时删除应用程序数据（仅作用于一键安装程序）
  "runAfterFinish": true, // 完成后是否运行已安装的应用程序（对于辅助安装程序，应删除相应的复选框）
  "menuCategory": false // 是否为开始菜单快捷方式和程序文件目录创建子菜单，如果为true，则使用公司名称
}
```
