
//Primeiro Checkpoint - 24/02/2022
//Amanda Alves Reis

function microondas(opcao = 0, tempo) {
    let tempPadrao = 0;
    let nomePrato = ' ';

    switch(opcao) {
        case 1: 
            tempPadrao = 10;
            nomePrato = 'Pipoca';
            break;
        case 2: 
            tempPadrao = 8;
            nomePrato = 'Macarrão';
            break;
        case 3:
            tempPadrao = 15;
            nomePrato = 'Carne';
            break;
        case 4:
            tempPadrao = 12;
            nomePrato = 'Feijão';
            break;
        case 5: 
            tempPadrao = 8;
            nomePrato = 'Brigadeiro';
            break;
        default:
            return 'Prato inexistente';
    }

    if (tempo < tempPadrao) {
        return 'Tempo insuficiente';
    } else if (tempo >= 2 * tempPadrao && tempo < 3 * tempPadrao) { 
        return 'Sua comida queimou!'; 
    } else if (tempo >= 3 * tempPadrao) {
        return 'kabumm';
    } else if (tempo >= tempPadrao && tempo < 2*tempPadrao ) {
        return `Seu(a) ${nomePrato} está pronto(a), bom apetite!!!`;
    } 

}

// console.log('--------Testes-----------');
// console.log(microondas(1,1)); //Tempo insuficiente
// console.log(microondas(2,1)); //Tempo insuficiente
// console.log(microondas(3,1)); //Tempo insuficiente
// console.log(microondas(4,1)); //Tempo insuficiente
// console.log(microondas(5,1)); //Tempo insuficiente
// console.log(microondas(1,20)); //Sua comida queimou!
// console.log(microondas(2,16)); //Sua comida queimou!
// console.log(microondas(3,30)); //Sua comida queimou!
// console.log(microondas(4,24)); //Sua comida queimou!
// console.log(microondas(5,16)); //Sua comida queimou!
// console.log(microondas(1,30)); //kabumm
// console.log(microondas(2,24)); //kabumm
// console.log(microondas(3,45)); //kabumm
// console.log(microondas(4,36)); //kabumm
// console.log(microondas(5,24)); //kabumm
// console.log(microondas(1,10)); //Prato pronto, bom apetite!!!
// console.log(microondas(2,8));  //Prato pronto, bom apetite!!!
// console.log(microondas(3,15)); //Prato pronto, bom apetite!!!
// console.log(microondas(4,12)); //Prato pronto, bom apetite!!!
// console.log(microondas(5,8)); //Prato pronto, bom apetite!!!
// console.log(microondas(7,8)); //prato inexistente
// console.log(microondas(1,15)); //Prato pronto, bom apetite!!!
// console.log(microondas()); //prato inexistente


