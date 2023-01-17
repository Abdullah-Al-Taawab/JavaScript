let a=[2,3,4,5,6,7];
console.log(a);
console.log(a[0]);
let r=a.push(8); //push add new element at the end and return the new length of the array
console.log(a,r);
let p=a.pop();
console.log(a,p); // pop remove the last element of the array and return the popped value
const l=[2,3,4,5]; //if a constant is an object or array its properties or items can be updated or removed.
l.push(8);
console.log(l);
a.shift(); //remove the first element of the array.
console.log(a);
a.unshift(2); //unshift add new element at the first of the array.
console.log(a); 