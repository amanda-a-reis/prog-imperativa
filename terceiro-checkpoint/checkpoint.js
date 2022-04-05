
//Terceiro Checkpoint de Programação Imperativa
//Amanda Alves Reis

//Passo 1 e 2

function Aluno(nome, faltas, notas){
    this.nome = nome
    this.faltas = faltas
    this.notas = notas

    this.calcularMedia = function() {
        const somaNotas = this.notas.reduce(((acumulador, numero) => acumulador + numero)) 
        const media = somaNotas / this.notas.length
        return media 
    }

    this.incrementaFaltas = function() {
        this.faltas = this.faltas + 1;
        return this.faltas
    }
}

const amanda = new Aluno("Amanda", 0, [10, 9, 8, 7])
const lucas = new Aluno("Lucas", 3, [7.7, 7.7,7.7, 7.7] )
const newton = new Aluno("Newton", 2, [10, 10, 10, 10] )
const camila = new Aluno("Camila", 3, [3,2,8,5] )
const fabricio = new Aluno("Fabricio", 5, [1,1,1,1] )

//Testes

// console.log(amanda.calcularMedia());
// console.log(amanda.incrementaFaltas());

// console.log(lucas.calcularMedia());
// console.log(lucas.incrementaFaltas());

// console.log(newton.calcularMedia());
// console.log(newton.incrementaFaltas());

// console.log(camila.calcularMedia());
// console.log(camila.incrementaFaltas());

// console.log(fabricio.calcularMedia());
// console.log(fabricio.incrementaFaltas());

//Passos 3, 4 5 e 6

const curso = {
    nome: "CTD",
    notaAprovacao: 7,
    faltasMax: 3,
    estudantes: [amanda, lucas, newton, camila, fabricio],

    adicionaEstudante: function(aluno) {
        this.estudantes.push(aluno)

        return this.estudantes
    },

    situacaoAluno: function(aluno) {

    const mediaAluno = aluno.calcularMedia();
    const faltasAluno = aluno.faltas;
    
    if (mediaAluno >= this.notaAprovacao && faltasAluno < this.faltasMax) {
        return true 
    } else if (mediaAluno < this.notaAprovacao || faltasAluno > this.faltasMax){
        return false
    } else if ( faltasAluno == this.faltasMax && mediaAluno == this.faltasMax + 0,1 * this.faltasMax){
        return true
    }

    },

    alunosAprove: function() {

        const situacoesAlunos = this.estudantes.map(element => {
            return this.situacaoAluno(element)
        })

        return situacoesAlunos;

    }
  

}

//Testes

// console.log(curso.nome)
// console.log(curso.notaAprovacao)
// console.log(curso.faltasMax)
// console.log(curso.estudantes)

// const marcia = new Aluno("Marcia", 3, [8,8,9,7])

// console.log(curso.adicionaEstudante(marcia))

// console.log(curso.situacaoAluno(amanda)) //true
// console.log(curso.situacaoAluno(lucas)) //true
// console.log(curso.situacaoAluno(newton)) //true
// console.log(curso.situacaoAluno(fabricio)) //false
// console.log(curso.situacaoAluno(camila)) //false

// console.log(curso.alunosAprove());


