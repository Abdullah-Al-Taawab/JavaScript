let arr=[2,3,4,5,6];
console.log("Normal For loop")
for(let i=0;i<arr.length;i++)
  {
    console.log(arr[i]);
  }
console.log("For of loop")
for(let p of arr)
  {
    console.log(p);
  }
console.log("Array.from");
let word="Taawab";
let a=Array.from(word); //Array.from creates an array
console.log(a)
console.log("For in loop")
for(let r in arr) //in "for in" loop it give the index number.
  {
    console.log(r)
  }