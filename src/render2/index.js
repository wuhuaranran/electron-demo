/*
 * @Description: 渲染进程 2
 * @Author: xue.zhang
 */ 


var { ipcRenderer } = require('electron');

// 注意这里 在渲染进程中需要从remote中获取BrowserWindow
const BrowerWindow = require('electron').remote.BrowserWindow;

// 监听主进程传递过来的数据 
ipcRenderer.on('to render2',(e, data)=>{
    console.log('render2接收的render传来的数据', data)
})