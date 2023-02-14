setTimeout(funtion = () => {
  alert("game")
}

  , 5000)
const sum = (a, b) => {
  console.log(a + b)

}
setTimeout(sum, 2000, 2, 3)
//set interval keep executing after some specific time. its like infinite loop . setTimeout executes just for one time after specific time.
setInterval(sum, 1000, 2, 3)