const { app, BrowserWindow } = require('electron')
const path = require('path')
 
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    center: true,
    fullscreen: false,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'assets/icons/64x64.png')
  })
 
  win.loadFile('index.html')
}
 
app.whenReady().then(() => {
  createWindow()
 
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})
 
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
