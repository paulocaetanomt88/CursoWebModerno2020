{ 
    { 
        { 
            { 
                var visivel = 'Variável visivel em todo o escopo'
            } 
        } 
    } 
}

console.log(visivel)

function teste() {
    var local = 'Variável visivel em escopo local'
    console.log(local)
}

teste()
