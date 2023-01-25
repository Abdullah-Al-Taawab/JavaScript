
let decision = true;

while (decision) {
  let age = prompt("Enter your age ? ");
  age = Number.parseInt(age);
  if (age < 0) {
    console.error(" Wrong age is diven ");
    break;
  }
  if (age == 17) {
    location.href = "https://google.com";
    break;
  }
  if (age >= 18) {
    alert(" Yes you can DRIVE ");
  }
  else {
    alert(" You can not drive ");
  }
  decision = confirm(" Do you want to submit your age again ? ");
}
