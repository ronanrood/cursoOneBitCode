const word = prompt("Informe uma palavra:")
let inverseWord = ""

for(let i = word.length - 1; i >= 0; i--){
    inverseWord += word[i]
}

if (word === inverseWord) {
    alert (word + "e um palindromo")
}else{
    alert(
        word + "n e um palindromo \n\n" +
        word +"!=="+inverseWord 
    ) 
}