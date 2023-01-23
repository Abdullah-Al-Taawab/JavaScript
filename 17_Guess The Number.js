let a = Math.random() * 100;
a=Number.parseInt(a);
//console.log(a);
let count = 0;
let guess;
do {
  guess = prompt("Guess a number");
  guess = Number.parseInt(guess);
  count++;
  if (a > guess) {
    console.log("actual number is greater than guessed one");
  }
  else if(a<guess) {
    console.log("actual number is less than guessed one");
  }
  else{
    console.log("Correct");
  }
} while (a != guess)
console.log("Actual number",a);
console.log("Point = ", 100-count);