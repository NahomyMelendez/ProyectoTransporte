const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 650,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  Menu.setApplicationMenu(null);

  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);


ipcMain.on('login-success', (event, role) => {
  if (role === 'admin') {
    mainWindow.loadFile('admin.html');
  } else {
    mainWindow.loadFile('home.html');
  }
});


ipcMain.on('open-register', () => {
  mainWindow.loadFile('register.html');
});


ipcMain.on('go-login', () => {
  mainWindow.loadFile('index.html');
});


ipcMain.on('go-home', () => {
  mainWindow.loadFile('home.html');
});


ipcMain.on('go-admin', () => {
  mainWindow.loadFile('admin.html');
});


ipcMain.on('open-recover', () => {
  mainWindow.loadFile('recover.html');
});


ipcMain.on('open-profile', () => {
  mainWindow.loadFile('perfil.html');
});


ipcMain.on('abrir-reservas', () => {
  mainWindow.loadFile('reservas.html');
});

ipcMain.on('abrir-inf-reservas', () => {
  mainWindow.loadFile('inf_reservas.html');
});

ipcMain.on('abrir-inicio', () => {
  mainWindow.loadFile('home.html');
});


ipcMain.on('logout', () => {
  mainWindow.loadFile('index.html');
});
