// const pessoa -> posição na memoria, exemplo "ef15w23" -> que contém o objeto {...}
const pessoa = { nome: 'Paulo'}

// a posição na memória é imutável mas os atributos do objeto podem ser alterados
pessoa.nome = 'Pedro'
console.log(pessoa.nome)

// se tentar alterar a posição na memmoria de pessoa dará erro pois é uma constante
// pessoa = { nome: 'Geringonça' } -> Erro!

// congela o objeto
Object.freeze(pessoa)

// tentando alterar ou adicionar um atributo nao dá erro mas a tentativa é ignorada
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

// imprime os dados que o objeto continha antes do congelamento
console.log(pessoa.nome)
console.log(pessoa)

// criando um objeto constante para nunca ser mudado, nem a posiçao na memoria e nem os atributos
const pessoaConstante = Object.freeze({ nome: 'Joao' })
console.log(pessoaConstante)