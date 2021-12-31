const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
     width: 496,
     height: 300,
     resizable: false,
     autoHideMenuBar: true,
  });

  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});
