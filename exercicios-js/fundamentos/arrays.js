const valores = [7.7, 8.9, 6.3, 9.2] // cria vetor com 4 posições e armazena em valores
console.log(valores[0], valores[3]) // imprime as posições 0 e 3 do vetor armazenado em valores
console.log(valores[4]) // geraria erro pois o vetor possui posições de 0 a 3. Mas em JS retorna 'undefined'

valores[4] = 10 // agora a posição 4 existe e guarda o valor 10
console.log(valores) // imprime o array
console.log(valores.length) // imprime a quantidade de posições do vetor

valores.push({id: 3}, false, null, 'teste') // atribui novas posições ao vetor com os valores informados
console.log(valores)

console.log(valores.pop()) // pop remove o último valor do array

delete valores[0] // deleta o valor na posição indicada

valores[0] = "Valor na primeira posição"

console.log(valores)

console.log(typeof valores) // array em JS é do tipo objeto

/*
 * Boas Práticas:
 * Não criar array com vários tipos de dados.
 * Criar cada array com tipos homogêneos
 */