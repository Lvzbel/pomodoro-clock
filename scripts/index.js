var moment = require("moment");
moment().format();

const workIncrease = document.querySelector("#increase-work");
const workDecrease = document.querySelector("#decrease-work");
const workDisplay = document.querySelector("#work-display");
const breakIncrease = document.querySelector("#increase-break");
const breakDecrease = document.querySelector("#decrease-break");
const breakDisplay = document.querySelector("#break-display");

const setTime = minutes =>
  moment()
    .second(0)
    .add(minutes, "minutes");

let workAdjuster = 25;
let breakAdjuster = 5;

let workTimer = setTime(workAdjuster);
let breakTimer = setTime(breakAdjuster);

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
