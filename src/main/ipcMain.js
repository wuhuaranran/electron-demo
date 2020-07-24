/*
 * @Description: 主进程接收消息
 * @Author: xue.zhang
 */ 

let { ipcMain,BrowserWindow } = require('electron')

// 接收渲染进程的同步消息 并返回
ipcMain.on('message1', (event, arg) => {
    console.log(`2--main receive ${arg} and return Hi`) 
    event.returnValue = 'Hi~'
})

// 接收渲染进程的异步消息 并返回
ipcMain.on('message2', (event, arg) => {
  console.log(`4--main receive ${arg} and return I'm fine`) 
  event.reply('message3', "I'm fine")
})


// 接收到渲染进程 打开新窗口 的消息
ipcMain.on('open new window', (e, data)=> {    
    // 调用window打开新窗口
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile("./src/render2/index.html");
    
    // 把渲染进程传递过来的数据再次传递给渲染进程render2
    // 等待窗口加载完
    win.webContents.on('did-finish-load', ()=>{
        return [ win.webContents.send('to render2', data)]
    })
})
