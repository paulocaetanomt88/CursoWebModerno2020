function tratarErroELancar(erro) {
    //throw new Error('Mensagem de erro')
    //throw 10
    //throw true
    throw { 
        codigo: 1, 
        msg: 'mensagem',
        erro: erro, 
        solucao: 'Tentar isso...'}
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        //Aqui pode-se lançar o erro diretamente com o throw ou usar uma função
        // personalizada como, no caso, a tratarErroELancar(e)
        tratarErroELancar(e)
    } finally {
        console.log('finalmente Rico!')
    }
}

const obj = {Name : 'Paulo'}
imprimirNomeGritado(obj)