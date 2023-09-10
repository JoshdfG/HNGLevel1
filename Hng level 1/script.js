const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "friday",
  "Saturday",
];

let UTC = document.querySelector(".UTCTime");
let weekDay = document.querySelector(".dayOfTheWeek");
let time = document.getElementById("time");
let day = document.getElementById("day");

/* logic for the time in UTC*/
const t = () => {
  UTC = new Date().getTime();
  time.innerHTML = `Current UTC Time : ${UTC}`;
  let update = setTimeout(function () {
    t();
  }, 1000);
};
t();

/* logic for the current day*/
weekDay = new Date();
let d = weekDays[weekDay.getDay()];
day.innerHTML = `Day of the week : ${d}`;
