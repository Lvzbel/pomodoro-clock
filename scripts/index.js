const workIncrease = document.querySelector("#increase-work");
const workDecrease = document.querySelector("#decrease-work");
const workDisplay = document.querySelector("#work-display");
const breakIncrease = document.querySelector("#increase-break");
const breakDecrease = document.querySelector("#decrease-break");
const breakDisplay = document.querySelector("#break-display");

let workAdjuster = 25;
let breakAdjuster = 5;

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

render(workDisplay, workAdjuster);
render(breakDisplay, breakAdjuster);

workIncrease.addEventListener("click", function() {
  workAdjuster = changeAdjuster(workAdjuster, "add");
  render(workDisplay, workAdjuster);
});

workDecrease.addEventListener("click", function() {
  workAdjuster = changeAdjuster(workAdjuster, "subtract");
  render(workDisplay, workAdjuster);
});

breakIncrease.addEventListener("click", function() {
  breakAdjuster = changeAdjuster(breakAdjuster, "add");
  render(breakDisplay, breakAdjuster);
});

breakDecrease.addEventListener("click", function() {
  breakAdjuster = changeAdjuster(breakAdjuster, "subtract");
  render(breakDisplay, breakAdjuster);
});
