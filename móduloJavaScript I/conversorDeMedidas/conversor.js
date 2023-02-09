const valueMeters = parseFloat(prompt("Insira um valor em metros:"));
const opcao = prompt(
  "Escolha a unidade de medida para qual deseja converter:\n-mm\n-cm\n-dm\n-dam\n-hm\n-km\n"
);

switch (opcao) {
  case "mm":
    const valueMM = valueMeters * 1000;
    alert (`O valor convertido em MM é de ${valueMM}`);
    break
  case "cm":
    const valueCM = valueMeters * 100;
    alert(`O valor convertido em CM e de ${valueCM}`)  
    break
  case "dm":
    const valueDM = valueMeters * 10;
    alert(`O valor convertido em DM e de${valueDM}`)  
    break
  case "dam":
    const valueDAM = valueMeters * 0.1;
    alert(`O valor convertido em DAM e de ${valueDAM}`)
    break
  case "hm":
    const valueHM = valueMeters * 0.01;
    alert(`O valor convertido em HM e de ${valueHM}`)
    break
  case "km":
    const valeuKM = valueMeters *0.001; 
    alert(`O valor convertido em KM e de ${valeuKM}`)  
    break
default:
    alert("Opcao insdisponivel.")       
}

