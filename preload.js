const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  fetchUsers: () => ipcRenderer.invoke('get-users')
})