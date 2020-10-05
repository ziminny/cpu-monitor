exports.Disks = class Disks
{
  constructor(si)
  {
    this.si = si;
  }

  getDisks(win)
  {
      this.si.fsSize( (v) => {
        win.webContents.send('disks',v);
      })
  }
}
