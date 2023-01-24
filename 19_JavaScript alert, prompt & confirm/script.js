let a=prompt("Enter your id"); 
a=Number.parseInt(a);
alert(a);
let b=confirm("Do you want to change your id ?"); // if press yes then it return true otherwise false;
if(!b)
{
  document.write("My id is ", a); // write in browser
  
}
else
{
  a=prompt("Enter your id correctly"); 
  a=Number.parseInt(a);
  document.write("My id is ", a);
  
}
