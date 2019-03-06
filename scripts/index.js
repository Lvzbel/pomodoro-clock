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

render(workDisplay, workAdjuster);
render(breakDisplay, breakAdjuster);

workIncrease.addEventListener("click", function() {
  workAdjuster++;
  render(workDisplay, workAdjuster);
});

workDecrease.addEventListener("click", function() {
  workAdjuster--;
  render(workDisplay, workAdjuster);
});

breakIncrease.addEventListener("click", function() {
  breakAdjuster++;
  render(breakDisplay, breakAdjuster);
});

breakDecrease.addEventListener("click", function() {
  breakAdjuster--;
  render(breakDisplay, breakAdjuster);
});
