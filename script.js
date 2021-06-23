let rectangleWidth = document.getElementById("rectanglewidth");
let rectangleHeight = document.getElementById("rectangleheight");
let squareWidth = document.getElementById("squarewidth");
let squareHeight = document.getElementById("squareheight");
let triangleHeight = document.getElementById("triangleheight");
let circleradius = document.getElementById("circleradius");
let shapeContainer = document.getElementById("shapesoutputarea");
let squareBtn = document.getElementById("squarebtn");
let circleBtn = document.getElementById("circlebtn");
let triangleBtn = document.getElementById("trianglebtn");
let rectangleBtn = document.getElementById("rectanglebtn");

let area

let shapeNameInfo = document.getElementById("shape-name-info");
let shapeWidthInfo = document.getElementById("shape-width-info");
let shapeHeightInfo = document.getElementById("shape-height-info");
let shapeRadiusInfo = document.getElementById("shape-radius-info");
let shapeAreaInfo = document.getElementById("shape-area-info");
let shapePerimeterInfo = document.getElementById("shape-perimeter-info");
let form = document.querySelector("form");

form.addEventListener("click", (e) => e.preventDefault());
rectangleBtn.addEventListener("click", () => new Rectangle());
squareBtn.addEventListener("click", () => new Square());
circleBtn.addEventListener("click", () => new Circle());
triangleBtn.addEventListener("click", () => new Triangle());


class Shape {
  constructor() {
    this.div = document.createElement("div");
    shapesoutputarea.appendChild(this.div);
    this.div.addEventListener("dblclick", () => this.div.remove());
    this.div.style.left = `${Math.floor(Math.random() * 400)}px`
    this.div.style.top = `${Math.floor(Math.random() * 400)}px`
    this.div.addEventListener("click", () => this.describe());
  }
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.div.style.height = `${circleradius.value}px`
    //this.div.classList.add("circle");
    this.div.style.backgroundColor = "purple";
    shapeContainer.appendChild(this.div);
    this.div.className = "shape";
  }
  area(a) {
    return a**2 * 0.5;
  }
  circlemaker(r) {
    this.r2 = r * r;
    this.circumf = this.r2 * Math.PI;
    // return this.circumf
    console.log(this.circumf);
  }
  describe() {
    shapeNameInfo.innerText = "Circle";
    shapeRadiusInfo.innerText = `${circleradius}px`
    shapeAreaInfo.innerText = "area value";
    shapePerimeterInfo.innerText = "perimeter value";

  }
}

class Triangle extends Shape {
  constructor(a) {
    super();
    this.div.style.height = `${triangleHeight.value}px`;                
    this.div.style.backgroundColor = "yellow";                            
    this.a= `${triangleHeight.value}px`;   
    this.div.className = "shape";
    shapeContainer.appendChild(this.div);

  }
  area(a) {
    return a**2 * 0.5;                     // Triangle area: 0.5 * base * height
  }
  perimeter(w, h) {
    return 2 * h +(Math.sqrt(2) * h);                      //   2 * height + (square root of 2) * height
  }
  describe() {
    shapeNameInfo.innerText = "Triangle";
    shapeHeightInfo.innerText = `${triangleHeight.value}px`;

    shapeAreaInfo.innerText = "area value";
    shapePerimeterInfo.innerText = "perimeter value";

  }
}

class Rectangle extends Shape {
  constructor(w, h) {
    super();
    this.div.style.width = `${rectangleWidth.value}px`; // Needs to call the constructor of its logical parent class
    this.div.style.height = `${rectangleHeight.value}px`;
    this.div.style.backgroundColor = "green";
    this.div.className = "shape";
    shapeContainer.appendChild(this.div);
    this.w= `${rectangleHeight.value}`;
    this.h= `${rectangleWidth.value}`;

  
  }

  perimeter(w, h) {
    return this.p = 2 * (`${this.w} * ${this.h}px`);    
  }
  area(w, h) {
    return this.a = 2 * (`${this.w} * ${this.h}px`) * h;
  }
  
  describe() {
    shapeNameInfo.innerText = "Rectangle";
    shapeWidthInfo.innerText = `${rectangleWidth.value}px`;
    shapeHeightInfo.innerText = `${rectangleHeight.value}px`;
    shapeAreaInfo.innerText = `${this.a}`;
    shapePerimeterInfo.innerText = `${this.p}`;
  }
}
console.log(this.p);     

class Square extends Shape {
  // Needs to take a single parameter, sideLength, in its constructor
  constructor(w, h) {
    super();
    this.div.style.width = `${squareWidth.value}px`; // Needs to call the constructor of its logical parent class
    this.div.style.height = `${squareHeight.value}px`;
    this.div.style.backgroundColor = "red";
    this.div.className = "shape";
  }
  perimeter(w, h) {
    return 2 * (w * h);
  }
  area(w, h) {
    return w * h;
  }

  describe() {
    shapeNameInfo.innerText = "Square";
    shapeWidthInfo.innerText = `${squareWidth.value}px`;
    shapeHeightInfo.innerText = `${squareHeight.value}px`;
    shapeAreaInfo.innerText = "area value";
    shapePerimeterInfo.innerText = "perimeter value";

  }
}

// Remember that a circle's perimeter is the same as its circumference
// Drawing a triangle is going to be tricky!
// Try to use CSS class names and write as many styles onto those class names as you can
// Only use inline-styles when necessary (and some things will require it in this lab)

