let n=prompt("Enter the value of n");
n=Number.parseInt(n);
let sum=0;
for(let i=1;i<=n;i++)
  {
    sum=sum+i;
  }
console.log(sum)
console.log(sum<20? "sum is less than 20":"sum is greater than 20");