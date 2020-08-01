// Lembrando: por convenção, nome de classes se inicia com letra Maiúscula

class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    // método addLancamento()
    //...lancamentos vai receber todos os lançamentos que foram passados e no final concatenar em um array
    addLancamento(...lancamentos) {
        // para cada elemento de ...lancamentos dê um push para o array lancamentos
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    // método sumario() 
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamento(salario, contaDeLuz)
console.log(contas.sumario())