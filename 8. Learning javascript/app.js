// let character = 'Hello';
// console.log(character);
// character = "World";

function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];
  let roman = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      roman += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }
  return roman;
}

function showRomanNumeral() {
  const numberInput = document.getElementById("numberInput").value;
  const romanNumeral = convertToRoman(parseInt(numberInput, 10));
  document.getElementById("romanNumeral").innerHTML = romanNumeral;
}

document
  .getElementById("convertButton")
  .addEventListener("click", showRomanNumeral);

document
  .getElementById("numberInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      showRomanNumeral();
    }
  });
