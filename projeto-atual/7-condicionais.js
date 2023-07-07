console.log('Trabalhando com Condicionais');

const listaDeDestinos = new Array(

    'são paulo',
    'rio de janeiro',
    'salvador'

);
    const idadeComprador = 18;
    console.log("Destinos Possiveis:");
    console.log(listaDeDestinos);
    if(idadeComprador >= 18){

        listaDeDestinos.splice(1,1);
        console.log("Comprador maior de idade posso vender")
    }else{

        console.log("Comprador Menor de idade não posso vender")
    }
    
    console.log(listaDeDestinos);
