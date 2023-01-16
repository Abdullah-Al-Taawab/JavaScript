let word="Taawab";
console.log(word.length);
console.log(word.toUpperCase());
console.log(word.toLowerCase());
for(let i=0;i<word.length;i++)
  {
    console.log(word[i]);
  }
let word1="Sonali";
let word2="Intellect";
let word3=word1.concat(" ",word2, " LTD");
console.log(word3);

word=word.replace("Ta","po"); //case sensitive as well.
console.log(word);

let word4="            anik  taawab              ";
word4=word4.trim();// remove the white spaces from front and back
console.log(word4);
console.log(word1.slice(2)); //index 2 to last char of string
console.log(word1.slice(2,5)); // index 2 to index 4. upto 5 but not 5



