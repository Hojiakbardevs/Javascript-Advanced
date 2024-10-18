const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();

// Positioning numbers on the clock
const numbers = document.querySelectorAll('.number');
numbers.forEach((number, index) => {
  const angle = (index + 1) * 30; 
  const radius = 120; 
  const x = radius * Math.cos(angle * (Math.PI / 180));
  const y = radius * Math.sin(angle * (Math.PI / 180));
  number.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
});
