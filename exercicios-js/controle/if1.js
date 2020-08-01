 function soBoaNoticia(nota) {
     if(nota>=7) {
         console.log('Aprovado com ' + nota)
     }
 }

 soBoaNoticia(8.1)
 soBoaNoticia(6.1)

 function seForVerdadeEuFalo(valor) {
     if(valor) {
         console.log('É verdade... ' + valor)
     }
 }

 seForVerdadeEuFalo() // se não passar nada é undefined que resolve para falso, => não faz nada
 seForVerdadeEuFalo(null) // não faz nada pois null => resolve para falso
 seForVerdadeEuFalo(undefined) // não faz nada pois undefined (explicitamente) => resolve para falso
 seForVerdadeEuFalo(NaN) // NaN => resolve para falso
 seForVerdadeEuFalo('')  // '' é string vazia => resolve para falso
 seForVerdadeEuFalo(0) // 0 => resolve para falso
 seForVerdadeEuFalo(-1) // -1 é número diferente de 0 => resolve para verdadeiro
 seForVerdadeEuFalo(' ') // ' ' é string com espaço embrando => resolve para verdadeiro
 seForVerdadeEuFalo('?') // caractere '?' é diferente de texto vazio => resolve para verdadeiro
 seForVerdadeEuFalo([]) // vetor mesmo que vazio => resolve para verdadeiro
 seForVerdadeEuFalo([1, 2]) // vetor com elementos => resolve para verdadeiro
 seForVerdadeEuFalo({}) // objeto mesmo que vazio => resolve para verdadeiro