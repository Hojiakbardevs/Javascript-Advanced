const sum = document.querySelector("#sum");
const usd = document.querySelector("#usd");
sum.addEventListener("input", () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();
  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      console.log(data);
      usd.value = (+sum.value / data.current.usd).toFixed(2);
    }
  });
});
