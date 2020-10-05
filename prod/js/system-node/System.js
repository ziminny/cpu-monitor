exports.System = class System
{

    constructor(os)
    {
      this.os = os;
      this.totalMen = this.os.totalmem();
      this.freeMen = this.os.freemem();
    }

    getUsedMen()
    {
      return ((this.totalMen - this.freeMen)/100).toFixed(0);
    }

    getObjSystem(win)
    {

        this.os.cpuUsage( (v) => {

          let obj = {
            mem:this.getUsedMen(),
            cpu:(v*100).toFixed(0)
          }

              win.webContents.send('system',obj);
        })
    }



}
