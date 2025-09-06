//1 function หาพื้นที่สี่เหลี่ยมผืนผ้า
function calcArea(width, height) {
    return width * height;
}
console.log(calcArea(5, 10)); 

//2 function หาค่าเฉลี่ย ถ้า divisor = 0 ให้ throw error
function avg(sum, divisor) {
    if (divisor === 0) {
        throw new Error("Divisor must not be 0");
    }
    return sum / divisor;
}
console.log(avg(20, 4)); 

//3 object literal เก็บข้อมูลนักเรียน
const student = { id: 101, name: "Ann" };
console.log(student.name); 

//4 object literal ที่มี key ซ้ำ
const obj = { a: 10, a: 20 };
console.log(obj.a); 

//5 ใช้ constructor function สร้าง object หนังสือ
function Book(title, author) {
    this.title = title;
    this.author = author;
}
const b1 = new Book("JS Guide", "Max");
console.log(b1.title); 

//6 class แสดงรถยนต์
class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}
const c1 = new Car("Toyota", "Black");
console.log(c1);

//7 class มี method
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    intro() {
        return `I am ${this.name}, ${this.age} years old.`;
    }
}
const st1 = new Student("Nok", 20);
console.log(st1.intro()); 

//8 Object.create
const animal = { type: "mammal" };
const dog = Object.create(animal);
dog.name = "Lucky";
console.log(dog.type); 

//9 ใช้ Object.create กับ prototype chain
const baseObj = { city: "Bangkok" };
const child = Object.create(baseObj);
console.log(child.city); 

//10 destructuring object
const person = { id: 999, username: "pop" };
let { username, id } = person;
console.log(username); 
console.log(id);       

//11 destructuring object ซ้อน
const emp = { empId: 12, profile: { fname: "Somchai", lname: "Dee" } };
let { profile: { fname } } = emp;
console.log(fname); 

//12 function รับ object แล้วใช้ destructuring
function showPet({ name, type }) {
    console.log(`Pet: ${name}, Type: ${type}`);
}
const p = { name: "Milo", type: "Cat" };
showPet(p); 

//13 function เปรียบเทียบ object
function isSame(o1, o2) {
    return o1 === o2;
}
const aa = { x: 1 };
const bb = aa;
const cc = { x: 1 };
console.log(isSame(aa, bb)); 
console.log(isSame(aa, cc)); 

//14 function รับ array ของ object แล้วคืนชื่อคนแรก
function firstName(students) {
    return students[0].name;
}
const group = [{ name: "Ann" }, { name: "Tom" }];
console.log(firstName(group)); 

//15 ใช้ try-catch จับ error
function divide(a, b) {
    if (b === 0) throw new Error("Divide by zero");
    return a / b;
}
try {
    console.log(divide(10, 2)); 
    console.log(divide(10, 0)); 
} catch (e) {
    console.log("Error:", e.message);
}

