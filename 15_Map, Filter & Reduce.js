let a=[20,30,2,3];
let arr=a.filter((value)=> // creates a new array by filtering existing array. does not effect the existing array.
  {
    return value<10;
  })
console.log(arr);
let arr2=a.map((value)=> //map create a new array by performing some operation on each array element.
  {
    return value*value;
  })
console.log(arr2);
let sum=a.reduce((value,value2)=> //reduce an array to a single value
  {
    return value+value2
  })
console.log(sum);





