Array.prototype.forEach2 = function(callback) { // parâmetro criado para usar no loop
    // this acessa a instancia do Array através de uma função que pertence ao prototype
    for(let i = 0; i<this.length; i++) {
        // 1º parâmetro é o próprio valor, 2º é o índice e o 3º é o array completo
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) { 
    console.log(`${indice+1}) ${nome}`)
})