const { app, BrowserWindow } = require('electron')
const { exec } = require("child_process");

const createWindow = () => {
    exec("nest start");
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
  createWindow()
})