class Currency {
  #code;
  #rate;

  constructor(code, rate) {
    this.#code = code;
    this.#rate = rate;
  }

  get code() {
    return this.#code;
  }
  get rate() {
    return this.#rate;
  }
  display(container) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${this.#code}</td>
    <td>${this.#rate}</td>
    `;
    container.appendChild(tr);
  }
}

class CurrencyConverter {
  #currencies;
  constructor(currencies) {
    this.#currencies = currencies;
    this.#populateSelect("from-currency");
    this.#populateSelect("to-currency");
    document
      .getElementById("convert-button")
      .addEventListener("click", this.#convert.bind(this));
  }
  #populateSelect(selectId) {
    const selectElement = document.getElementById(selectId);
    this.#currencies.forEach((currency) => {
      const option = document.createElement("option");
      option.value = currency.rate;
      option.label = currency.code;
      selectElement.appendChild(option);
    });
  }
  #convert() {
    const from = document.getElementById("from-currency").value;
    const to = document.getElementById("to-currency").value;
    const amount = document.getElementById("amount").value;
    console.log(from, to, amount);
    const result = (amount * from) / to;
    document.getElementById("result").textContent = `Result: ${result}`;
  }
}

class App {
  #list;
  #currencies;
  constructor() {
    this.#init();
  }
  async #init() {
    this.#list = document.getElementById("table-body");
    try {
      const host = "api.frankfurter .app";
      const resp = await fetch(`https://${host}/latest?from=USD`);
      const data = await resp.json();
      this.#transformResult(data);
      this.#renderCurrency();
      this.#renderConverter();
    } catch (error) {
      alert("Xatolik chiqibdi");
    }
  }
  #renderConverter() {
    const converter = new CurrencyConverter(this.#currencies);
  }
  #transformResult(data) {
    const { base, amount, rates } = data;
    const BaseCurrency = new Currency(base, amount);
    const currencies = Object.entries(rates).map(([code, rate]) => {
      return new Currency(code, rate);
    });
    this.#currencies = [BaseCurrency, ...currencies];
  }
  #renderCurrency() {
    this.#currencies.forEach((currency) => currency.display(this.#list));
  }
}
new App();
