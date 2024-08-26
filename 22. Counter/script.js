const countrDisplay = document.getElementById("counter-value");
let counter = 0;

function incrementCounter() {
  counter++;
  countrDisplay.textContent = counter;
}

function decrementCounter() {
  counter--;
  countrDisplay.textContent = counter;
}

function resetCounter() {
  counter = 0;
  countrDisplay.textContent = counter;
}

document.getElementById("increase-btn").addEventListener("click", incrementCounter);
document.getElementById("decrease-btn").addEventListener("click", decrementCounter);
document.getElementById("reset-btn").addEventListener("click", resetCounter);