let arr=[2,3,4,5];
let a=prompt("Enter a new num");
a=Number.parseInt(a);
arr.push(a);
console.log(arr);
arr.unshift(a);
console.log(arr);
let arr2=[2,3,4,5,6];
let b;
do{
  b=prompt("Enter another number");
  b=Number.parseInt(b);
  arr2.push(b);
  
}while(b!=0)
console.log(arr2);

let arr3=arr.filter((value)=>
  {
    return value%2==0;
  })
console.log(arr3);
arr3=arr2.map((value)=>
  {
    return value*value;
  })
console.log(arr3);