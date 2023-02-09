//Primeira parte
let nome = prompt("Qual seu Primeiro Nome ?");
let sobrenome = prompt("Qual seu Sobrenome?");
let area = prompt("Qual sua area de estudos ?");
let ano = prompt("Qual ano de nascimento ?");
const a_atual = 2023;

alert(
  `Nome Completo: ${nome} ${sobrenome}\n
  Area de Estudo: ${area} \n
  Idade: ${a_atual - ano}`
);

//Segunda parte
let entrada1 = prompt("Digite um número:");
let entrada2 = prompt("Digite um outro número:");
const n1 = parseFloat(entrada1);
const n2 = parseFloat(entrada2);

alert(
  `Entre os número ${entrada1} e ${entrada2} os resultados são:\n
     Soma: ${n1 + n2} \n
     Subtração: ${n1 - n2} \n
     Multiplicação: ${n1 * n2} \n
     Divisão: ${n1 / n2}`
);
