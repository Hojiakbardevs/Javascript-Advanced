// const myMap = new Map();
// myMap.set("firstname", "Ulugbek");
// myMap.set("lastname", "Samigjonov");
// myMap.set("age", 25);
// console.log(myMap.get("firstname"));
// myMap.set("job", "Software Engineer");
// console.log(myMap.get("job"));
// console.log(myMap.size);
// myMap.delete("lastname");
// console.log(myMap.size);
// // console.log(myMap);

// const button  = document.getElementById("btn")
// // button.style.setProperty("background-color", "red") 
// // button.style.setProperty("padding", "10px") 
// // const button = document.getElementById('button');
// button.classList.add('btn-success');
// button.classList.remove('btn-danger');
// button.classList.toggle('active');
// const hasClass = button.classList.contains('btn-success');
// console.log(hasClass);

const Btn = document.getElementById("myButton")
Btn.addEventListener("click",function(){
    var myDiv = document.getElementById("myDiv")
    myDiv.classList.toggle("btn-success")
})


const grandparent = document.querySelector("#gradnparent")
const parent = document.querySelector("#parent")
const child = document.querySelector("#child")

grandparent.addEventListener("click", function(event){
    alert("Grandparent Clicked")
})

parent.addEventListener("click", function(event){
    alert("Parent Clicked")
})

child.addEventListener("click", function(event){
    alert("Child Clicked")
})