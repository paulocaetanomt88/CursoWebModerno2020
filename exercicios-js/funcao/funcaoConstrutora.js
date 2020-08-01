function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado (usar let)
    let velocidadeAtual = 0

    // this. torna o metodo público para poder manipular os atributos de forma controlada
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 50)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())