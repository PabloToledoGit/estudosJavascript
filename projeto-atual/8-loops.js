console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array("são paulo", "rio de janeiro", "salvador");
const idadeComprador = 18;
console.log("Destinos Possiveis: \n");
console.log(listaDeDestinos);

const estaAcompanhada = true;
let passagemComprada = true;
const destino = "são paulo";


if (idadeComprador >= 18 || estaAcompanhada == true) {
  listaDeDestinos.splice(1, 1);
  console.log("Boa Viagem!!");
  passagemComprada = true;
} else {
  console.log("Não é maior de idade, não posso vender \n");
  passagemComprada = false;
}
console.log("Embarque: \n");
if (idadeComprador == 18 && passagemComprada) {
  console.log("Boa Viagem!!");
} else {
  console.log("Não é possivel embarcar \n");
}
let contador = 0;
while (contador < 3) {
  if(listaDeDestinos[contador] == destino){
    console.log("Destino Existe");

  }else{

    console.log("Destino não existe")
  }

  contador += 1;
}
