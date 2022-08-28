const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const dataNumber = document.querySelectorAll(".data-number");
const clear = document.querySelector(".data-clear");
const equal = document.querySelector(".data-equal");
const clearOne = document.querySelector(".data-clearOne");

let displayValue = "";

clearOne.addEventListener("click", () => {
  displayValue = displayValue.slice(0, -1);
  display.innerHTML = displayValue;
});

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
  displayValue = eval(displayValue).toString();
  display.innerHTML = displayValue;
});
