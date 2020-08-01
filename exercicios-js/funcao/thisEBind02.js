function Pessoa() {
    this.idade = 0

    const self = this // criando uma cópia de this fora de setInterval 

    // setInterval dispara uma outra função a partir de um intervalo determinado
    setInterval(function() { 
        // this.idade++ - da erro pois aqui o this está referenciando ao temporizador de setInterval e não ao objeto Pessoa que possui o atributo idade
        self.idade++ // usando o self para fazer referencia ao this que aponta para Pessoa()

        console.log(self.idade)
    }/*.bind(this) */, 1000)
}

new Pessoa()