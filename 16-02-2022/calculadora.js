
//1. Crie um arquivo calculadora.js que terá as diferentes operações  para realizar.

//2. Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.

function adiciona(numA, numB) {
    const soma = numA + numB;
    return soma
}

//3. Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.

function subtrai(numA, numB) {
    const subtracao = numA - numB;
    return subtracao;
}

//4. Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.

function multiplica(numA, numB) {
    const multiplicacao = numA * numB;
    return multiplicacao;
}

//5. Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.

function divide(numA, numB) {

    if (numB == 0) {
        return 'Erro: divisão por zero'
    }else {
        return numA / numB;
    }

}

//Calculadora - Nível II

//1. No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, 
//crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções.

console.log ("-------------- Teste de Operaçõesa / Calculadora --------------")

console.log(adiciona(25,25));
console.log(subtrai(50,25));
console.log(multiplica(5,5));
console.log(divide(5,0))
console.log(divide(10,5))

//Calculadora - Nível III - Funções Extras

//1. Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, 
//ou seja, ao quadrado. Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().

function quadradoDoNumero(numA) {
    const quadrado = multiplica(numA, numA);
    return quadrado;
}

console.log(quadradoDoNumero(5));

//2. Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
//Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

function mediaDeTresNumeros(numA, numB, numC) {
    const soma1 = adiciona(numA, numB);
    const soma2 = adiciona(soma1, numC);
    const media = divide(soma2,3);
    return media;
}

console.log(mediaDeTresNumeros(1,2,3));

//3. Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, 
//e que deverá retornar x% de totalPorcentagem.

function calculaPorcentagem(valor, porcentagem) {
    const decimal = divide(porcentagem, 100);
    const resultado = multiplica(decimal, valor);
    return resultado;
}

console.log(calculaPorcentagem(300,15));
console.log(calculaPorcentagem(300, 120));

//4. Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
//Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).

function geradorDePorcentagem(valorRelativo, valorBase) {
    const numerador = multiplica(valorRelativo, 100);
    const resultado = divide(numerador, valorBase);
    return resultado;
}

console.log(geradorDePorcentagem(2,200));
console.log(geradorDePorcentagem(100,100));