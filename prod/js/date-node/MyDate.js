const DateAndHours = require('./DateAndHours');

exports.MyDate = class MyDate extends DateAndHours
{
  constructor()
  {
    super();

    this.dayName = [
      "Domingo" ,"Segunda Feira" , "Terça Feira" ,"Quarta Feira", "Quinta Feira" ,"Sexta Feira" ,"Sábado"
    ];
    this.day = this.dayName[this.date.getDay()];
  }

  d()
  {
      this.d = this.date.getDate();
      if (this.d <10) return this.d = "0"+this.d;
      return this.d;
  }

  m()
  {
      this.m = this.date.getMonth()+1;
      if (this.m <10) return this.m = "0"+this.m;
      return this.m;
  }

  y()
  {
      this.y = this.date.getFullYear();
      return this.y;
  }

  getDay()
  {
    return this.day;
  }

  getDate()
  {
    return this.d()+"/"+this.m()+"/"+this.y();
  }

}
