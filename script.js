const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const dataNumber = document.querySelectorAll(".data-number");
const clear = document.querySelector(".data-clear");
const equal = document.querySelector(".data-equal");
const clearOne = document.querySelector(".data-clearOne");
const themeButton = document.querySelectorAll(".theme");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const table = document.querySelector(".table");
const red = document.querySelectorAll(".red");
const body = document.querySelector(".body");
const header = document.querySelector(".header");

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
  try {
    displayValue = eval(displayValue).toString();
    display.innerHTML = displayValue;
  } catch (e) {
    console.log(e);
    alert("PLEASE INPUT VALID EXPRESSION");
  }
});
for (item of themeButton) {
  item.addEventListener("click", () => {
    sun.classList.toggle("hidden");
    moon.classList.toggle("hidden");
    for (button of buttons) {
      button.classList.toggle("dark-mode-button");
    }
    display.classList.toggle("dark-mode-display");
    table.classList.toggle("dark-mode-table");
    for (item of red) {
      item.classList.toggle("dark-mode-red");
    }
    body.classList.toggle("dark-mode-body");
    header.classList.toggle("dark-mode-header");
  });
}
