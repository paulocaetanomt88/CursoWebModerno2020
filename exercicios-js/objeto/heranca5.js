// Os 3 abaixo sao do tipo function e possuem atributo padrao .prototype
console.log(typeof String) // function
console.log(typeof Array) // function
console.log(typeof Object) // function

// String.prototype não possui reverse mas o Array possui
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

// depois da implementação em String.prototype, agora uma string de caracteres pode chamar a função reverse
console.log('Escola Cod3r'.reverse())

// Implementando first em Array.prototype
Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5, 6, 7, 8].first())
console.log(['a', 'b', 'c', 'd', 'e'].first())

// Obs.: tomar cuidado para não sobrescrever funções já existentes no prototype