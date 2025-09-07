//1 ใช้ forEach หาคำที่ลงท้ายด้วย 'e'
const words = ['apple','mango','banana','orange'];
const endWithE = [];
words.forEach(word => {
  if (word.endsWith('e')) {
    endWithE.push(word);
  }
});
console.log(endWithE);

//2 ใช้ filter หาคำที่ยาวเกิน 5 ตัวอักษร
const longWords = words.filter(w => w.length > 5);
console.log(longWords);

//3 ใช้ map() แปลงให้ทุกคำเป็นตัวพิมพ์ใหญ่
const upperWords = words.map(w => w.toUpperCase());
console.log(upperWords);

//4 ใช้ map() แปลง object เป็นชื่อเต็ม
const employees = [
  { firstname: 'Somchai', lastname: 'Jaidee' },
  { firstname: 'Suda', lastname: 'Rakdee' },
];
const names = employees.map(p => p.firstname + " " + p.lastname);
console.log(names);

//5 ใช้ filter() หาชื่อที่มี "dee"
const nameWithDee = names.filter(n => n.toLowerCase().includes('dee'));
console.log(nameWithDee);

//6 ใช้ reduce() หาผลรวมคะแนน
const scores = [10, 20, 15, 30];
const sum = scores.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

//7 ใช้ reduce() รวมราคาสินค้าแบบ object
const carts = [
  { productId: 1, price: 20, amount: 2 },
  { productId: 2, price: 50, amount: 1 },
];
const total = carts.reduce((acc, item) => acc + (item.price * item.amount), 0);
console.log(total);

//8 ใช้ reduce() + คำนวณ VAT 7%
const vat = total * 0.07;
console.log("รวมสุทธิ:", total + vat);

//9 ใช้ map() + filter หาคนที่ชื่อขึ้นต้นด้วย S
const startS = employees
  .map(p => p.firstname)
  .filter(n => n.startsWith('S'));
console.log(startS);

//10 ใช้ forEach แสดง index + ค่าของ array
scores.forEach((score, index) => {
  console.log(`Index ${index}: ${score}`);
});