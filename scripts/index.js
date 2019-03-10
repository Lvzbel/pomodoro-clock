var moment = require("moment");
moment().format();

const workIncrease = document.querySelector("#increase-work");
const workDecrease = document.querySelector("#decrease-work");
const workDisplay = document.querySelector("#work-display");
const breakIncrease = document.querySelector("#increase-break");
const breakDecrease = document.querySelector("#decrease-break");
const breakDisplay = document.querySelector("#break-display");

const pomodoroBtn = document.querySelector("#pomodoro");
const breakBtn = document.querySelector("#break");

const start = document.querySelector(".btn-start");
const stop = document.querySelector(".btn-stop");
const reset = document.querySelector(".btn-reset");
const display = document.querySelector(".display");

const setTime = minutes =>
  moment()
    .second(0)
    .minute(minutes);

let workAdjuster = 25;
let breakAdjuster = 5;

let workTimer = setTime(25);
let breakTimer = setTime(breakAdjuster);

let isWork = true;

let timer;

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

// =========================================================
// Initial Render of minutes
// =========================================================
render(workDisplay, workAdjuster);
render(breakDisplay, breakAdjuster);

// =========================================================
// Work and Break Time Events
// =========================================================
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

const timeTracker = (adjuster, time) => {
  time.subtract(1, "seconds");
  display.innerHTML = time.format("mm:ss");
};

// =========================================================
// Main Time Controls
// =========================================================
start.addEventListener("click", function() {
  timer = setInterval(function() {
    if (isWork) {
      timeTracker(workAdjuster, workTimer);
    } else {
      timeTracker(breakAdjuster, breakTimer);
    }
  }, 1000);
});

stop.addEventListener("click", function() {
  clearInterval(timer);
});

reset.addEventListener("click", function() {
  clearInterval(timer);
  workAdjuster = 25;
  breakAdjuster = 5;
  render(workDisplay, workAdjuster);
  render(breakDisplay, breakAdjuster);
  workTimer = setTime(25);
  display.innerHTML = "00:00";
});

// =========================================================
// Work and Break Selector
// =========================================================
pomodoroBtn.addEventListener("click", function() {
  if (!isWork) {
    isWork = !isWork;
  }
});

breakBtn.addEventListener("click", function() {
  if (isWork) {
    isWork = !isWork;
  }
});
