/*
 * @Description: 项目入口
 * @Author: xue.zhang
 */ 

const { app, BrowserWindow } = require("electron");
require('./src/main/ipcMain.js')

function createWindow() {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    // 不加该配置项，渲染进程会出现 require is not defined
    webPreferences: {
      nodeIntegration: true
    }
  });

  // 加载index.html文件
  win.loadFile("./src/render/index.html");
  // 打开控制台
  win.webContents.openDevTools();

  // let win2  = new BrowserWindow({
  //   width: 800,
  //   height: 600,
  // });
  // win2.loadURL("http://www.baidu.com");
}

app.whenReady().then(createWindow);


console.log("the electron app is started...");