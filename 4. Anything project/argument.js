// function Polygon(height, width) {
//   this.name = "Polygon";
//   this.height = height;
//   this.width = width;
// }

// // method prototype

// Polygon.prototype.sayName = function () {
//   console.log("Polygonmi: " , this.name);
// };
// // -----------------

// let polygon = new Polygon(10, 20);

// polygon.sayName();

// class Polygon {
//   constructor(height, withd) {
//     this.name = "Polygon";
//     this.height = height;
//     this.withd = withd;
//   }
//   sayName() {
//     console.log("Polygonmi: ", this.name, this.height, this.withd);
//   }
// }

// class Square extends Polygon {
//   constructor(length) {
//     super(length, length);
//     this.name = "Square";
//   }
//   get area() {
//     return this.height * this.withd;
//   }
//   set area(value) {
//     this.area = value;
//   }
// }

// let  s = new Square(5)
// s.sayName()

// console.log(s.area);

// function Component(name) {
//   this.name = name;
// }

// Component.prototype.sayName = function () {
//   console.log("Component: ", this.name);
//   let outputElement = document.getElementById("output");
//   outputElement.innerHTML = 'Component: ' + this.name;
// };

// let comp = new Component("Salom dunyo");

// comp.sayName();

// class componenetni chaqiramiz

// class Component {
//   constructor(value) {
//     this.value = value;
//   }
//   sayName() {
//     let outputElement = document.getElementById("output");
//     outputElement.innerHTML = "Component: " + this.value;
//   }
// }

// let comp = new Component("Salom dunyo");

// comp.sayName();

// objectlar bilan ishlash

let user = {
  id: 1234,
  fname: "Steve",
  lname: "Jobs",
};

function display(user) {
  // const id = user.id;
  // const fname = user.fname;
  // const lname = user.lname;
  // console.log(id, fname, lname);

  const { id, fname, lname } = user;
  console.log(id, fname, lname);
}
display(user);