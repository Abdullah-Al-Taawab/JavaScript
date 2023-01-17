let a = [200,365,42,544,6]
delete a[0]; //delete does not effect array length
console.log(a) 
let b=[44,43,45,65];
let d=[22,23,25,26];
let c=a.concat(b,d);
console.log(c); //concat create a new array after adding arrays and it does not effect the existing one.

let e = [200,365,42,90000,6544]
e.sort(); //it sort array alphabetically like 2000 will come before 40 as it counts everything as string so 2 is come before 4.
console.log(e);
e.splice(1,3,400,400,400); // here 1 is position from where we want to add, 3 is num of value we want to remove and 400 ,400,400 are the values which we want to add.
console.log(e);
let t=e.slice(2); // slices out from array and create a new array. it does not change the existing array so array "e" will be same.
console.log(t);
e.reverse();
console.log(e);
