const { app , BrowserWindow , screen } = require("electron");
const os = require("os-utils");
const path = require("path");
const si = require("systeminformation");
const   fullDate = require("./prod/js/date-node/fullDate.js")
const { System } = require("./prod/js/system-node/System.js")
const { Disks } = require("./prod/js/disks-node/Disks.js")

app.commandLine.appendSwitch('enable-transparent-visuals');

function createWidowDate()
 {
   let display = screen.getPrimaryDisplay();
   let width = display.bounds.width;
   let height = display.bounds.height

     const mainWindow = new BrowserWindow(
       {
           height:65,
           width:310,
           x:width-310,
           y:40,
           //alwaysOnTop: true,
           frame : false,
           transparent:true,
           webPreferences: {
               // permite usar as variaveis na view
             nodeIntegration: true,

           }
       }
     );

     mainWindow.setResizable(false);

     mainWindow.loadURL(`file://${path.join(__dirname,"/prod/index.html")}`);
         setInterval( () => {
           let date = fullDate()
             mainWindow.webContents.send('date',date);
         },1000);

createwindowSystem(width);
createwindowDisks(width)

}

function createwindowSystem(width)
{
  const windowSystem = new BrowserWindow(
    {
        height:125,
        width:310,
        x:width-310,
        y:115,
        //alwaysOnTop: true,
        frame : false,
        transparent:true,
        webPreferences: {
            // permite usar as variaveis na view
          nodeIntegration: true,

        }
    }
  );

  windowSystem.setResizable(false);
  windowSystem.loadURL(`file://${path.join(__dirname,"/prod/system.html")}`);
      setInterval( () => {
          system = new System(os);
          system.getObjSystem(windowSystem);
      },1000);
}

function createwindowDisks(width)
{
  const windowDisks = new BrowserWindow(
    {
        height: 140,
        width:310,
        x:width-310,
        y:230,
      //  alwaysOnTop: true,
        frame : false,
        transparent:true,
        webPreferences: {
            // permite usar as variaveis na view
          nodeIntegration: true,

        }
    }
  );

  windowDisks.setResizable(false);

  windowDisks.loadURL(`file://${path.join(__dirname,"/prod/disks.html")}`);

      setInterval( () => {
          system = new Disks(si);
          system.getDisks(windowDisks);

      },1000);
}

app.on("ready" , () => setTimeout( createWidowDate , 1000) );

app.on("window-all-closed" , () => {
console.log("Aplicação encerrada")
    app.quit();
})
