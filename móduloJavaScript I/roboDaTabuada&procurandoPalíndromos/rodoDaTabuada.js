let number = prompt("Insira um numero para exebição da tabuada:")
let result = ""

for(let fator = 1; fator<=20;fator++){
    result += number+ "*" + fator + "=" + (number*fator) +"\n"
}
alert("Resultado da tabuada de "+number + ":\n\n"+
result)

