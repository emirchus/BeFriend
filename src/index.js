const { app, BrowserWindow } = require('electron');

const path = require('path')
const url = require('url');
let window;

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

function createWindow() {
    window = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 800,
        minHeight: 600,
        title: "BeFriend",
        transparent: true, frame: false, titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true
        }
    })

    //window.webContents.openDevTools();

    window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

    window.on('closed', () => {
        window = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})
