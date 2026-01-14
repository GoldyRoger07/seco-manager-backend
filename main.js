const { app, BrowserWindow } = require('electron')
const { exec } = require("child_process");
const path = require("path")


const createWindow = () => {
    exec("node ./backend/dist/src/main.js");
  
    const win = new BrowserWindow({
      width: 1200,
      height: 720,
      icon: path.join(__dirname, "favicon.ico"),
    })

  win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
  createWindow()
})


// const { spawn } = require("child_process")
// function startBackend() {
//   spawn("node", ["backend/dist/main.js"], {
//     shell: true,
//     detached: true
//   })
// }
