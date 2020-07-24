/*
 * @Description: 渲染进程
 * @Author: xue.zhang
 */ 

const { ipcRenderer } = require('electron')

const send = document.querySelector("#send");

send.addEventListener("click",()=>{
    // 给主进程发送 同步消息
    const message1 = ipcRenderer.sendSync('message1', 'Hello~');
    console.log('1--渲染进程给主进程发送消息 Hello',`主进程返回 ${message1}`)

    // 渲染进程给主进程发送 异步消息
    const message2 = ipcRenderer.send('message2', 'How are you')
    console.log('3--渲染进程再次给主进程发送消息 How are you',`主进程返回 ${message2}`)

    // 接收主进程返回的消息
    ipcRenderer.on('message3', (event, arg) => {
        console.log('5--渲染进程接收到主进程返回的消息',arg) 
    })
})

document.querySelector("#open").onclick = () => {
    ipcRenderer.send('open new window', 'http://www.baidu.com')
}
