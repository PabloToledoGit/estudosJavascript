console.log('Trabalhando com Listas');

const listaDeDestinos = new Array(

    'são paulo',
    'rio de janeiro',
    'salvador'

);  listaDeDestinos.push(`Curitiba`); //adicionando um iten na lista
    console.log("Destinos Possiveis:");
    console.log(listaDeDestinos);

    listaDeDestinos.splice(1,1);
    console.log(listaDeDestinos);
    console.log(listaDeDestinos[1], listaDeDestinos[0]);