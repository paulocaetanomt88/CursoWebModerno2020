// Estratégia 1 para grar valor padrão
function soma1(a, b, c) {
    a = a || 1 // se a existe mantém valor de a, senão recebe 1
    b = b || 1 // se b existe mantém valor de b, senão recebe 1
    c = c || 1 // se c existe mantém valor de c, senão recebe 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0)) // 3 5 6 [3] => é bug pois deveria ser 0

// Estratégias 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // a é não-indêntico a undefined? se nao for undefined mantém o valor de a, senão recebe 1
    b = 1 in arguments ? b : 1 // se existir o índice 1 dentro do array de argumentos recebidos mantém o valor de b, senão recebe 1
    c = isNaN(c) ? 1 : c // c é um NaN (Nao é um número)? se não for um número recebe 1, senão mantém o valor de c que foi recebido
    return a + b + c
}
console.log(soma2(), soma2(3), soma1(1,2,3), soma2(0,0,0)) // 3 5 6 0 => ok

// Valor padrão do es2015: forma mais enxuta e sem bug
function soma3(a=1, b=1, c=1) { // se receber um valor, sobrescreve o valor definido na parametrização da função, senão mantém  o padrão
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0)) // 3 5 6 0 => ok