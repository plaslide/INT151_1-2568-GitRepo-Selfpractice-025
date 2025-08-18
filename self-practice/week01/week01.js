//1
const arr = ['peerapol',12,true,'max']
//2
console.log([arr.length])
///3
console.log(arr[0])
///4
console.log(arr[arr.length-1])
///5
arr.push('peem','nena')
console.log(arr)
//6
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
//7
arr.shift(3)
console.log(arr)
//8
let str = 'pretawe'
const strsp = [...str]
console.log (strsp)
 
//9
let maxxi = new Array
console.log (maxxi)
let maxxi2 = new Array('tung')
console.log (maxxi2)
let maxxi3 = new Array('tung','tung','sahur')
console.log (maxxi3)
 
//10
const [,,h,,...n] = [5,10,15,20,25]
console.log(h,n)
console.log(typeof(h))
console.log(typeof(n))