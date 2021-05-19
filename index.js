const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow(){
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'ui/dist/core.min.js');
        }
    });
    win.loadFile(__dirname, 'ui/index.html');
}

app.whenReady().then(()=>{
    createWindow();
    app.on('activate', ()=>{
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow();
        };
    });
});

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    };
});
