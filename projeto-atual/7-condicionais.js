console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array("são paulo", "rio de janeiro", "salvador");
const idadeComprador = 17;
console.log("Destinos Possiveis: \n");
console.log(listaDeDestinos);

const estaAcompanhada = false;
const passagemComprada = true;

if (idadeComprador >= 18 || estaAcompanhada == true) {
  listaDeDestinos.splice(1, 1);
  console.log("Boa Viagem!!");
} else {
  console.log("Não é maior de idade, não posso vender \n");
}
console.log("Embarque: \n")
if(idadeComprador == 18 && passagemComprada){
  console.log("Boa Viagem!!")

}else{
  console.log("Não é possivel embarcar \n")

}



