
// 1. Crie uma função que converta polegadas em centímetros. 
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function polParaCm(polegadas) {
    const centimetros = 2.54*polegadas;
    return centimetros;
}

console.log(polParaCm(5));

// 2. Crie uma função que receba uma string e a converta em um URL.
// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function converteStringEmUrl(string) {
    const url = `http://www.${string}.com.br`;
    return url;
}

console.log(converteStringEmUrl('funcaojs'));

// 3. Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function trocaExclamacao(frase) {
    const novaFrase = frase + "!";
    return novaFrase;
}

console.log(trocaExclamacao('Ola mundo'))

//4. Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function idadeCachorro(idadeHumana) {
    const idadeCachorro = idadeHumana * 7;
    return idadeCachorro;
}

console.log(idadeCachorro(5));

//5. Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.

function calculaHoraDeTrabalho(salario) {
    const horaTrabalho = salario / 160;
    return horaTrabalho;
}

console.log(calculaHoraDeTrabalho(1500));

// 6. Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros 
// e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 

function calculaImc(altura, peso) {
    const imc = Math.round(peso / (altura**altura));
    return imc;
}

console.log(calculaImc(1.70, 80))
console.log(calculaImc(1.60, 60))
console.log(calculaImc(1.68, 50))

// 7 . Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
// Investigue o que o método de .toUpperCase() faz.

function converteParaMaiuscula(frase) {
    const maiuscula = frase.toUpperCase();
    return maiuscula;
}

console.log(converteParaMaiuscula('ola, essa é minha string de teste'))

// 8. Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
// Dica: Isso te ajudará a entender o que o operador typeof faz.

function retornaTipoDoParametro(parametro) {
    const tipoDoParametro = typeof parametro;
    return tipoDoParametro;
}

console.log(retornaTipoDoParametro(true));
console.log(retornaTipoDoParametro('oi'));
console.log(retornaTipoDoParametro(25));

// 9. Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
// Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

function calculaCircunferencia(raio) {
    const circunferencia = 2 * Math.PI * raio;
    return circunferencia.toFixed(3);
}

console.log(calculaCircunferencia(5))