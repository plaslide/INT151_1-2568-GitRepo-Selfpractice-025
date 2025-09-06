//1 สร้าง array เก็บชื่อ 3 คน แล้วแสดงจำนวนสมาชิก
const friends = ['anna','mike','john']
console.log(friends.length)

//2 แสดงสมาชิกตัวแรกของ array fruits
const fruits = ['apple','banana','mango']
console.log(fruits[0]) 

//3 แสดงสมาชิกตัวสุดท้ายของ array nums
const nums = [10,20,30,40]
console.log(nums[nums.length-1]) 

//4 เพิ่มค่า 'dog','cat' เข้าไปใน pets แล้วแสดงผล
let pets = ['bird']
pets.push('dog','cat')
console.log(pets) 

//5 ใช้ for loop แสดงค่าทีละตัวจาก colors
const colors = ['red','green','blue']
for (let i=0; i<colors.length; i++) {
   console.log(colors[i])
}

//6 ลบสมาชิกตัวแรกออกจาก cities แล้วแสดงผล
let cities = ['bangkok','tokyo','paris']
cities.shift()
console.log(cities)

//7 แปลง string 'hello' เป็น array ของตัวอักษร
let word = 'hello'
const letters = [...word]
console.log(letters)

//8 สร้าง array ว่างด้วย new Array แล้วเพิ่มค่า 'js' เข้าไป
let langs = new Array()
langs.push('js')
console.log(langs) 

//9 สร้าง array ด้วย new Array ที่มีสมาชิก 2 คน
let team = new Array('bob','alice')
console.log(team)

//10 ใช้ destructuring ดึงค่าออกมาจาก array [100,200,300,400,500]
// ให้ตัวแปร x เก็บ 300 และ y เก็บ array ที่เหลือ
const [,,x,,...y] = [100,200,300,400,500]
console.log(x) 
console.log(y)