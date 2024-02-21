
let systemInput = Math.floor(Math.random() * 101);
var systemGenerate = document.getElementById("systemGenerate");
var userGenerate = document.getElementById("userGenerate");
var resultGenerate = document.getElementById("result");
let result;
console.log(systemInput)
var userInput = prompt("Please enter something:");
systemGenerate.innerHTML += systemInput;
userGenerate.innerHTML += userInput;
if(systemInput == userInput){
    resultGenerate.innerHTML += "Congratualation it's Matched";
}else if(systemInput < userInput){
    resultGenerate.innerHTML += "Too High";

}else if(systemInput > userInput){
    resultGenerate.innerHTML += "Too Low";

}




