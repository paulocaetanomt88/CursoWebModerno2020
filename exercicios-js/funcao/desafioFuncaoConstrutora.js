function Pessoa(pNome) {
    
    let nome = pNome


    this.falar = function() {
        console.log(`Eu sou ${nome}`)
    }
}

const p1 = new Pessoa('Groot')
p1.falar()