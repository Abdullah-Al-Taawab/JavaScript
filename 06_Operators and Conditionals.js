let a=prompt("Enter your age");
a=Number.parseInt(a);
if(a>10 && a<20)
{
  console.log("Age is between 10 to 20");
}
else
{
  console.log("Age is not between 10 to 20")
}

let num=prompt("Enter a number")
num=Number.parseInt(num);
if(num%2==0 && num%3==0){
  console.log("Number is divisible by 2 and 3");
}
else
{
  console.log("Number is not divisible by bot 2 and 3")
}

let age=20
let decision= age>=18 ? "You can drive": "You can not drive"
console.log(decision)