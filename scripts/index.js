var moment = require("moment");
moment().format();

const workIncrease = document.querySelector("#increase-work");
const workDecrease = document.querySelector("#decrease-work");
const workDisplay = document.querySelector("#work-display");
const breakIncrease = document.querySelector("#increase-break");
const breakDecrease = document.querySelector("#decrease-break");
const breakDisplay = document.querySelector("#break-display");
const start = document.querySelector(".btn-start");
const stop = document.querySelector(".btn-stop");
const reset = document.querySelector(".btn-reset");
const display = document.querySelector(".display");

const setTime = minutes => moment().add(minutes, "minutes");

// Multiply a minute by 60000 to convert to miliseconds
// Devide a milisecond by 60000 to convert to minutes
let workAdjuster = 1500000;
let breakAdjuster = 300000;

let workTimer = setTime(25);
let breakTimer = setTime(breakAdjuster);
let timeLeft = 0;

let timer;

const render = (elementDisplay, itemRender) => {
  elementDisplay.innerHTML = itemRender;
};

const changeAdjuster = (adjuster, action) => {
  let result;
  if (action === "add") {
    result = adjuster + 60000;
  } else {
    if (adjuster > 60000) {
      result = adjuster - 60000;
    } else {
      result = 60000;
    }
  }
  return result;
};

// =========================================================
// Initial Render of minutes
// =========================================================
render(workDisplay, workAdjuster / 60000);
render(breakDisplay, breakAdjuster / 60000);

// =========================================================
// Work and Break Time Events
// =========================================================
workIncrease.addEventListener("click", function() {
  workAdjuster = changeAdjuster(workAdjuster, "add");
  workTimer = setTime(workAdjuster);
  workTimer = render(workDisplay, workAdjuster / 60000);
});

workDecrease.addEventListener("click", function() {
  workAdjuster = changeAdjuster(workAdjuster, "subtract");
  workTimer = setTime(workAdjuster);
  render(workDisplay, workAdjuster / 60000);
});

breakIncrease.addEventListener("click", function() {
  breakAdjuster = changeAdjuster(breakAdjuster, "add");
  breakTimer = setTime(breakAdjuster);
  render(breakDisplay, breakAdjuster / 60000);
});

breakDecrease.addEventListener("click", function() {
  breakAdjuster = changeAdjuster(breakAdjuster, "subtract");
  breakTimer = setTime(breakAdjuster);
  render(breakDisplay, breakAdjuster / 60000);
});

const timeTracker = (adjuster, time) => {
  const now = moment();
  console.log(`Now: ${now}`);
  console.log(`adjuster: ${time}`);
  timeLeft = time - now;
  display.innerHTML = moment(timeLeft).format("mm:ss");
};

// =========================================================
// Main Time Controls
// =========================================================
start.addEventListener("click", function() {
  timer = setInterval(function() {
    timeTracker(workAdjuster, workTimer);
  }, 1000);
});

stop.addEventListener("click", function() {
  clearInterval(timer);
});

reset.addEventListener("click", function() {
  clearInterval(timer);
  workAdjuster = 1500000;
  breakAdjuster = 300000;
  render(workDisplay, workAdjuster / 60000);
  render(breakDisplay, breakAdjuster / 60000);
  display.innerHTML = "25:00";
});
