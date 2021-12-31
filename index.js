const { app, BrowserWindow } = require('electron');
// import { app, BrowserWindow } from 'electron';

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
     width: 496,
     height: 300,
     resizable: false,
     autoHideMenuBar: true,
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
