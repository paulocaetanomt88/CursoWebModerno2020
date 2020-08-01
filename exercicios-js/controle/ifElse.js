const imprimeResultado = function(nota) {
    if(nota >= 7) 
    {
        console.log('Aprovado')
    }
    else
    {
        console.log('Reprovado')
    }
}

imprimeResultado(6)
imprimeResultado(7)
imprimeResultado('Epa') // nao vai dar erro pois JavaScript é fracamente tipada