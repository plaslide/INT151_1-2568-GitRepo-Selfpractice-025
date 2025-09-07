//1 เขียนฟังก์ชัน sayHi ที่รับชื่อ แล้วคืนค่า "Hi, <name>"
function sayHi(name) {
    return "Hi, " + name;
  }
  console.log(sayHi("Somchai")); 
  
  //2 เขียนฟังก์ชัน countChar ที่คืนค่าความยาวของ string โดยใช้ .length
  function countChar(str) {
    return str.length;
  }
  console.log(countChar("JavaScript")); 
  
  //3 สร้างค่าคงที่ MAX_GPA = 4.0
  const MAX_GPA = 4.0;
  console.log(MAX_GPA); 
  
  //4 สร้างคลาส Student ที่มี property id, name
  class Student {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  }
  const s1 = new Student(101, "Nok");
  console.log(s1); 
  
  //5 export ฟังก์ชัน add และค่าคงที่ VERSION
  function add(a, b) {
    return a + b;
  }
  const VERSION = "1.0";
  export { add, VERSION };
  
  //6 ใช้ sort() เรียงนักเรียนตาม gpa จากน้อยไปมาก
  const students = [
    { id: 1, name: "Ann", gpa: 2.8 },
    { id: 2, name: "Tom", gpa: 3.5 },
    { id: 3, name: "Bob", gpa: 3.0 },
  ];
  students.sort((a, b) => a.gpa - b.gpa);
  console.log(students);
  
  //7 ใช้ sort() เรียงนักเรียนตาม id จากมากไปน้อย
  students.sort((a, b) => b.id - a.id);
  console.log(students);
  
  //8 ใช้ filter() หานักเรียนที่ gpa >= 3.0
  const passed = students.filter(s => s.gpa >= 3.0);
  console.log(passed);
  
  //9 ใช้ map() สร้าง array ที่เก็บเฉพาะชื่อของนักเรียนทั้งหมดเป็นตัวพิมพ์ใหญ่
  const upperNames = students.map(s => s.name.toUpperCase());
  console.log(upperNames);
  
  //10 เขียนฟังก์ชัน getTopStudents ที่รับ array นักเรียนแล้วคืนเฉพาะชื่อนักเรียนที่ gpa >= 3.5
  function getTopStudents(stds) {
    return stds.filter(s => s.gpa >= 3.5).map(s => s.name);
  }
  console.log(getTopStudents(students));
  
  //11 ใช้ sort() เรียง array14 จากน้อยไปมาก
  const array14 = [1, 30, 4, 21, 1000];
  array14.sort((a, b) => a - b);
  console.log(array14); 
  
  //12 ใช้ filter() + map() หาชื่อคนสอบผ่าน (score >= 70) แล้วแปลงเป็นตัวพิมพ์เล็กทั้งหมด
  const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 },
  ];
  const lowerPassed = studentScores
    .filter(st => st.score >= 70)
    .map(st => st.name.toLowerCase());
  console.log(lowerPassed); 
  