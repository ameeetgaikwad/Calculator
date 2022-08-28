const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const dataNumber = document.querySelectorAll(".data-number");
const clear = document.querySelector(".data-clear");
const equal = document.querySelector(".data-equal");
const clearOne = document.querySelector(".data-clearOne");

let displayValue = "";

clearOne.addEventListener("click", () => {});

clear.addEventListener("click", () => {
  displayValue = "";
  display.innerHTML = displayValue;
});

for (item of dataNumber) {
  item.addEventListener("click", (e) => {
    displayValue += e.target.innerHTML;
    display.innerHTML = displayValue;
  });
}

equal.addEventListener("click", () => {
  display.innerHTML = eval(displayValue);
  displayValue = "";
});
