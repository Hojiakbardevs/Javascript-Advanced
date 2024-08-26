// const countrDisplay = document.getElementById("counter-value");
// let counter = 0;

// function incrementCounter() {
//   counter++;
//   countrDisplay.textContent = counter;
// }

// function decrementCounter() {
//   counter--;
//   countrDisplay.textContent = counter;
// }

// function resetCounter() {
//   counter = 0;
//   countrDisplay.textContent = counter;
// }

// document.getElementById("increase-btn").addEventListener("click", incrementCounter);
// document.getElementById("decrease-btn").addEventListener("click", decrementCounter);
// document.getElementById("reset-btn").addEventListener("click", resetCounter);

const counterDisplay = document.getElementById("counter-value");

let counter = 0;

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const action = event.currentTarget.getAttribute("data-action");
    if(action === 'increase'){
        counter++;
    } else if (action === 'decrease') {
      counter--;
    }
    else {
      counter = 0;
    }
    counterDisplay.textContent = counter;
  });
});
