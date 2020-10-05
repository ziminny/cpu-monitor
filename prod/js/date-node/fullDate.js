const { Hours } = require("./Hours");
const { MyDate } = require("./MyDate");
module.exports = () => {
  hours = new Hours();
  myDate = new MyDate();
  return {
    day: myDate.getDay(),
    date: myDate.getDate(),
    hours: hours.getHours()
  }

}
