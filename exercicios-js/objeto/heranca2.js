// Cadeia de Protótipos (prototype chain)
Object.prototype.attr0 = '0' // Object.prototype é o pai de todos [Não fazer isso pois vai impactar na estrutura toda!]

const avo = { attr1: 'A'} // __proto__ é igual a null pois não foi definido
const pai = { __proto__: avo, attr2: 'B'} // protótipo de pai é o avo
const filho = { __proto__: pai, attr3: 'C'} // protótipo de filho é o pai

// filho não possui attr1, vai buscar no pai, se não tem, busca no avo
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) 

// Imprime undefined pois attrA não foi atribuido ao objeto filho e a nenhum objeto superior em seu escopo
console.log(filho.attrA) 

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing é quando uma variavel local pode sombrear uma variavel de escopo mais abrangente
}

const volvo = {
    modelo: 'V40',
    status() { // sobrescrevendo o método status() no local
        return `${this.modelo}: ${super.status()}` // mas usando super para chamar o método do protótipo (superior)
    }
}

// estabelecendo uma relação entre ferrari-carro/ volvo-carro
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())