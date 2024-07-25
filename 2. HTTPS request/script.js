// setTimeout(() => {
//     console.log("hello world");
//     alert("hello world");
//     document.write("hello world")
// }, 3000);

const request = new XMLHttpRequest();
request.open('GET', 'https://cat-fact.herokuapp.com/facts')
request.send()

request.addEventListener('load', function(){
    const [data] = JSON.parse(this.responseText)
    console.log(data)
})