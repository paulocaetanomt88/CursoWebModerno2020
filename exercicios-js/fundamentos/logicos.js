function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // !!() converte em booleano e ^ é OU Exclusivo (só um pode ser verdadeiro)
    const comprarTv32 = trabalho1 != trabalho2 // simulando OU Exclusivo
    const manterSaudavel = !comprarSorvete // operador unário
    
    // JS permite apenas um retorno, entao passando 4 constantes dentro de um 
    // graças ao novo recurso de JS é possivel criar objeto chave-valor omitindo a chave
    // senão teria que criar { sorvete = comprarSorvete, ...}
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))