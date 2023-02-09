let nome = prompt("Qual seu nome, viajante?")
let numeroCidades = 0
let cidades = ""
let cidadesVisitadas = confirm("Você já visitou alguma cidade?")



while(cidadesVisitadas === true){
    cidades += prompt("Informe o nome da cidade!") + "\n"
    numeroCidades++
    cidadesVisitadas = confirm("Você já visitou alguma cidade?")
    }
alert("Seu nome é: " + nome + "\nAs cidades que você já vidsitou foram: " + "\n" + cidades  + "\nVocê visitou: " + numeroCidades + " cidades")