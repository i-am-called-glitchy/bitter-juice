require("v8-compile-cache");
const { app, BrowserWindow } = require("electron");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    icon: "src/assets/img/icon.png",
    width: 1280,
    height: 720,
    backgroundColor: "#141414",
  });
  mainWindow.loadFile("src/index.html");
  mainWindow.show();
});

app.on("window-all-closed", () => app.quit());
