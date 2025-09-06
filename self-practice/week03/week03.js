const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);

//1 arrow function anonymous
const evenNumbers1 = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers1); 

//2 anonymous function declaration
const evenNumbers2 = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers2);

//3 named arrow function
const isOdd = num => num % 2 !== 0;
const oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers)

//4 named function declaration
function isGreaterThan3(num) {
    return num > 3;
}
const greaterNums = numbers.filter(isGreaterThan3);
console.log(greaterNums); 

//5 forEach เก็บตัวเลขคูณ 2
const doubled = [];
numbers.forEach(n => doubled.push(n * 2));
console.log(doubled);

//6 map สร้าง array ของ square
const squares = numbers.map(n => n * n);
console.log(squares); 

//7 map + toString
const strNums = numbers.map(n => "No." + n);
console.log(strNums); 

//8 filter + map รวมกัน
const overTwo = numbers.filter(n => n > 2).map(n => n * 10);
console.log(overTwo); 

//9 find หาค่าที่เป็น 3
const findThree = numbers.find(n => n === 3);
console.log(findThree); 

//10 reduce รวมผลรวม
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); 

//11 push/unshift
const arr = [10];
arr.push(20);
arr.unshift(5);
console.log(arr);

//12 pop/shift
arr.pop();
arr.shift();
console.log(arr); 

//13 splice ลบแทรก
const fruits = ["apple","banana","cherry"];
fruits.splice(1,1,"mango"); 
console.log(fruits); 

//14 slice
const letters = ["a","b","c","d","e"];
console.log(letters.slice(1,4)); 
console.log(letters.slice(-2));  

//15 fill
const filled = ["x","y","z","w"];
filled.fill("a", 1, 3);
console.log(filled);