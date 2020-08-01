// Constante de contexto léxico Global
const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}
minhaFuncao()

function exec() {
    const valor = 'Local' // Constante de contexto léxico local da função exec()
    minhaFuncao() // acessa a const valor de contexto global
    console.log(valor) // acessa a const valor de contexto local
}

exec()