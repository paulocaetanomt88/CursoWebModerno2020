function teste1(num) {
    if(num > 7) 
        console.log(num)
        console.log('final') // esta instrução está fora do contexto do if, entao vai executar de qualquer forma
}

// teste1(1)
// teste1(8)

function teste2(num) {
    if(num > 7)
        ;
    {  
        console.log(num);
    }
}

teste2(6)
teste2(8)
