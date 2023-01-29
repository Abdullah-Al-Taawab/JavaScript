console.log(document.body.firstChild); // text cause there is space after body so it counts it as text
console.log(document.body.lastChild);
console.log(document.body.childNodes);
console.log(document.head.firstChild);
console.log(document.head.lastChild);
let a = Array.from(document.body.childNodes);
console.log(a);
console.log(document.head.parentNode);
console.log(document.head.parentElement);
console.log(document.head.firstElementChild);
console.log(document.head.lastElementChild);




