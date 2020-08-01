 // Criando uma função vazia sem definir nenhum atributo
function MeuObjeto() {}

// Por padrão, o atributo prototype existe automaticamente e é do tipo objeto {}
console.log(MeuObjeto.prototype) 

// Instanciando objetos a partir de uma função
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

// retorna true pois obj1 e obj2 apontam para o mesmo prototipo
console.log(obj1.__proto__ === obj2.__proto__) 

// retorna true pois quando se cria um objeto usando o new, o __proto__ desse objeto aponta para a função_criada.prototype
console.log(MeuObjeto.prototype === obj1.__proto__) 


MeuObjeto.prototype.nome = 'Paulo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Caetano'
obj2.falar()

const obj3 = {} // criou um objeto novo e vazio
obj3.__proto__ = MeuObjeto.prototype // aqui atribuiu um protótipo que antes era null
obj3.nome = 'dos Anjos' // criou atributo nome e deu o valor 'dos Anjos'
obj3.falar()


// Resumindo

// new MeuObjeto tem um __proto__ porque o resultado disso é um objeto e __proto__ é exatamente igual MeuObjeto.prototype
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)

// MeuObjeto é uma função, ele tem esse atributo e, por padrão, aponta para Function.prototype
console.log(MeuObjeto.__proto__ === Function.prototype)

// O protótipo do protótipo de uma function aponta para Object.prototype
console.log(Function.prototype.__proto__ === Object.prototype)

// O protótipo do protótipo de Object é nulo (*diferente de undefined)
console.log(Object.prototype.__proto__ === null)