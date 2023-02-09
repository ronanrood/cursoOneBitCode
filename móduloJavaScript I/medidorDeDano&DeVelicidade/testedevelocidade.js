let veiculo1 = prompt("Informe o nome do primeiro veículo:");

let velocidade1 = prompt("Qual a sua velocidade?");

let veiculo2 = prompt("Informe o nome do segundo veículo:");

let velocidade2 = prompt("Qual sua velocidade?");

if (velocidade1 === velocidade2) {
  alert("Os veiculos possuem a mesma velocidade.");
}
if (velocidade1 > velocidade2) {
  alert(`O ${veiculo1} é o mais rapido.`);
} else {
  alert(`O ${veiculo2} é o mais rapido.`);
}
