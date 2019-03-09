var moment = require("moment");
moment().format();

const workIncrease = document.querySelector("#increase-work");
const workDecrease = document.querySelector("#decrease-work");
const workDisplay = document.querySelector("#work-display");
const breakIncrease = document.querySelector("#increase-break");
const breakDecrease = document.querySelector("#decrease-break");
const breakDisplay = document.querySelector("#break-display");
const display = document.querySelector(".display");

const setTime = minutes => moment().add(minutes, "minutes");

let workAdjuster = 25;
let breakAdjuster = 5;

let workTimer = setTime(workAdjuster);
let breakTimer = setTime(breakAdjuster);
let timeLeft = 0;

const render = (elementDisplay, itemRender) => {
  elementDisplay.innerHTML = itemRender;
};

const changeAdjuster = (adjuster, action) => {
  let result;
  if (action === "add") {
    result = adjuster + 1;
  } else {
    if (adjuster > 1) {
      result = adjuster - 1;
    } else {
      result = 1;
    }
  }
  return result;
};

// Initial Render of minutes
render(workDisplay, workAdjuster);
render(breakDisplay, breakAdjuster);

workIncrease.addEventListener("click", function() {
  workAdjuster = changeAdjuster(workAdjuster, "add");
  workTimer = setTime(workAdjuster);
  workTimer = render(workDisplay, workAdjuster);
});

workDecrease.addEventListener("click", function() {
  workAdjuster = changeAdjuster(workAdjuster, "subtract");
  workTimer = setTime(workAdjuster);
  render(workDisplay, workAdjuster);
});

breakIncrease.addEventListener("click", function() {
  breakAdjuster = changeAdjuster(breakAdjuster, "add");
  breakTimer = setTime(breakAdjuster);
  render(breakDisplay, breakAdjuster);
});

breakDecrease.addEventListener("click", function() {
  breakAdjuster = changeAdjuster(breakAdjuster, "subtract");
  breakTimer = setTime(breakAdjuster);
  render(breakDisplay, breakAdjuster);
});

// const now = moment(300000);
// // const future = moment().add(5, "minutes");
// console.log(now.format("mm:ss"));

const timeTracker = (adjuster, time) => {
  let miliLeft = time - moment();
  display.innerHTML = moment(miliLeft).format("mm:ss");
};

setInterval(function() {
  timeTracker(workAdjuster, workTimer);
}, 1000);
