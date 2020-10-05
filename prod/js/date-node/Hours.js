

const DateAndHours = require('./DateAndHours');
exports.Hours = class Hours extends DateAndHours
{

    constructor() {
      super()
    }

    h()
    {
         this.h = this.date.getHours();
          if(this.h < 10) return this.h = "0"+this.h;
          return this.h;
    }

    m()
    {
          this.m = this.date.getMinutes();
          if(this.m < 10) return this.m = "0"+this.m;
          return this.m;
    }

    s()
    {
          this.s = this.date.getSeconds();
          if(this.s < 10) return this.s = "0"+this.s;
          return this.s;
    }

    full()
    {
          return `${this.h()}:${this.m()}:${this.s()}`;
    }

    getHours()
    {
          return  this.full();
    }
}

 
