var nome = "Ricardo";
var idade = 21;
var estaSolteiro = true;
console.log("EX:01")
//if (estaSolteiro) {//retorno da decisão true}
if (estaSolteiro === true) {//retorno da decisão true}
    console.log(nome + " está solteiro!")
}else{//se retorno da decisão for false
    console.log(nome + "esta casado!");
}

console.log("EX:02")
var numeroPassageiros = 23;
if (numeroPassageiros ===0) {
    console.log("O transporte está vazio.")
}else if (numeroPassageiros > 0 && numeroPassageiros < 50) {
    console.log("O transporte tem passageiros.")
}else {
    console.log("O transporte está lotado.")
}