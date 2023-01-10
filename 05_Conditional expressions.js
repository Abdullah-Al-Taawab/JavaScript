let a=prompt("Enter your age ?"); //prompt only save string so we have to typecast if we want other types.
a=Number.parseInt(a);
if(a<0)
{
  alert("Invalid age");
}
else if(a<18 && a>=0)
{
  alert("You should wait till 18");
}
else{
  alert("You can drive");
}
console.log("Done");

let name=prompt("Enter name");
switch(name) // in switch we have to use break after all case cause otherwise it will execute all the code after the right case.
  {
      case("galib"):
      console.log("My name is Galib")
      break;
      case("taawab"):
      console.log("My name is Taawab");
      break;
  }
