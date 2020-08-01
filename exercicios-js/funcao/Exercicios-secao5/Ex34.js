let comparaStrings = (palavra1, palavra2) => {
    let estaContido = true

    for( let i = 1; i < palavra1.length; i++) {
        let caractereDaString1 = palavra1.charAt(i).toLowerCase()
        for ( let j = 0; j < palavra2.length; j++) {
            let caractereDaString2 = palavra2.charAt(j).toLowerCase()
            if (caractereDaString1 == caractereDaString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido){
            return estaContido
        }  
    }
    return estaContido
}

console.log(comparaStrings("Tex2to", "Texto22"))