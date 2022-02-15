
//Constantes: Nome e Sobrenome
//Variáveis: Idade, peso e altura, que mudam com o tempo. O tipo de plano pode ser variável também.
//Segundo os dados, a variável PLANO poderia armazenar null para quem não tem o plano

function calculaImc(nome, idade, peso, altura) {
    const imc = Math.round(peso/(altura*altura));
    const frase = `${nome} tem ${idade} anos e seu indice de massa corporal é ${imc}`
    return frase;
}

const nome1 = 'José da Silva'
const idade1 = 27;
const peso1 = 83.5;
const altura1 = 1.70;
const plano1 = true;

const jose = calculaImc(nome1, idade1, peso1, altura1);
console.log(jose);

const nome2 = 'Carlos de Souza'
const idade2 = 28;
const peso2 = 80.1;
const altura2 = 1.76;
const plano2 = true;

const carlos = calculaImc(nome2, idade2, peso2, altura2);
console.log(carlos);

const nome3 = 'Aline Ferreira'
const idade3 = 33;
const peso3 = 63.7;
const altura3 = 1.53;
const plano3 = false;

const aline = calculaImc(nome3, idade3, peso3, altura3);
console.log(aline);

const nome4 = 'Ana Paula'
const idade4 = 26;
const peso4 = 55;
const altura4 = 1.62;
const plano4 = true;

const anaPaula = calculaImc(nome4, idade4, peso4, altura4);
console.log(anaPaula);

