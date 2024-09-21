// Ekranni tozalash
function clearDisplay() {
    document.getElementById('display').innerText = '';
  }
  
  // Displayga qiymat qo'shish
  function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
  }
  
  // Oxirgi kiritmani o'chirish
  function deleteLast() {
    let display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
  }
  
  // Natijani hisoblash
  function calculateResult() {
    let display = document.getElementById('display');
    try {
      display.innerText = eval(display.innerText);
    } catch (error) {
      display.innerText = 'Error';
    }
  }
  