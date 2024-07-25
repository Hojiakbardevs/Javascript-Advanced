// setTimeout(() => {
//     console.log("hello world");
//     alert("hello world");
//     document.write("hello world")
// }, 3000);

// const request = new XMLHttpRequest();
// request.open('GET', 'https://cat-fact.herokuapp.com/facts')
// request.send()

// request.addEventListener('load', function(){
//     const [data] = JSON.parse(this.responseText)
//     console.log(data)
// })

// let promise = new Promise(function(resolve, reject){
//     if(success){
//         resolve();
//     }else{
//         reject()
//     }
// })

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }

// function showMessageAfterDelay() {
//   delay(2000).then(() => {
//     console.log("hello world");
//   });
// }

// showMessageAfterDelay();

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("error berdi");
//   }, 300);
// });

// myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// // keling promise changeni o'rganamiz

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// }).then(function (res) {
//     alert(res)
//     return res * 2;
//   })
//   .then(function (res) {
//     console.log(res);
//     return res * 2;
//   })
//   .then(function (res) {
//   console.log(res)})



// Asysnc va awaitnilarni o'rganamiz