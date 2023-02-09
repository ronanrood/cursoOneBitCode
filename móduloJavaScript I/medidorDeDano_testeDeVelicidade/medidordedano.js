//let name1 = prompt("Insira o nome do seu personagem:");
let shield = confirm;
var damage = 10;

//let name2 = prompt("Insira o nome de outro personagem:");

var life = 100;
var vida = 0;
var def = 10;

if (damage > def) {
  var vida = damage - def;
  var life = vida - life;
}

if (damage <= def) {
  console.log("Miss Atack");
}

console.log(life);
