let options = prompt("Insira uma das opções baixo:\n-Opção 1\n-Opção 2\n-Opção 3\n-Opção 4\n-Encerrar ")

do{
    switch (options){
    case "1":
        alert("Opcao 1")    
        break
    case "2":
        alert("Opcao 2")
        break
    case "3":
        alert("Opcao 3")
        break
    case "4":
        alert("Opcao 4")
        break
    case "encerrar":   
    confirm("Deseja sair?")
    }
}while (option!=5) 