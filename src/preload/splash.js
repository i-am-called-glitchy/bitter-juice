const { ipcRenderer } = require("electron");
const version = require("../../package.json").version;

document.addEventListener("DOMContentLoaded", () => {
  const versionElement = document.querySelector(".ver");
  const statusElement = document.querySelector(".status");

  versionElement.textContent = `v${version}`;

  const updateStatus = (status) => (statusElement.textContent = status);

  updateStatus("Hello there :)")
});
