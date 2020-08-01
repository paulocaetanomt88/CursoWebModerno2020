// Se fizer função normal, o this aponta para global
let comparaComThis = function(param) {
    console.log(this === param)
}
comparaComThis(global) //true

const obj = {}

// mudando o contexto do this com bind 
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false
comparaComThis(obj) // true


// Se fizer Arrow Function o this não aponta para global
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true

// Arrow Function não muda o contexto do this com bind
// o this em Arrow Function é mais definido
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false
comparaComThisArrow(module.exports) // true
