let n=prompt("Enter the value of n");
n=Number.parseInt(n);
let sum=0;
for(let i=1;i<=n;i++)
  {
    sum=sum+i;
  }
console.log(sum)
console.log(sum<20? "sum is less than 20":"sum is greater than 20");

let obj=
  {
    taawab:"18101011",
    anik:"20341043",
    rapheo:"18101010"
  }
for(let b in obj)
  {
    console.log("id of " + b + " is "+obj[b]);
  }

for(let c in "anik")
{
  console.log(c);
  
}
for(let c of "anik")
{
  console.log(c);
  
}

