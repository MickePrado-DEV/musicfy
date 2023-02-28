const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1500,
		height: 1000,
		title: 'Musicfy',
		// titleBarStyle: "hiddenInset",
		// resizable: false,
	});
	mainWindow.loadURL(
		isDev
			? 'http://localhost:3000'
			: `file://${path.join(__dirname, '../build/index.html')}`
	);

	if (isDev) mainWindow.webContents.openDevTools();

	mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

/* This is a listener for the event 'window-all-closed' which is emitted when all windows are closed. */
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

/* A listener for the event 'activate' which is emitted when the application is activated. */
app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});
