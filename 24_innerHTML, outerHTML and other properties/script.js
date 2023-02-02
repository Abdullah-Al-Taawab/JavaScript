console.log(document.getElementsByTagName('span')[0]);
console.log(first.innerHTML);
first.innerHTML="game"
console.log(first.innerHTML);
console.log(first.outerHTML); //outer html contains full html. innerhtml and the element itself
console.log(first.outerHTML="<div>hey</div>")
console.log(document.body.textContent) // all text content of body will be shown