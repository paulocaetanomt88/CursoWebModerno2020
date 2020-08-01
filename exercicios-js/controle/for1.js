let contador = 1

while(contador <= 10) {
    console.log('Contador usando While: ' + contador)
    contador++
}

for(let i=1; i<=10; i++) {
    console.log('Contador usando For: ' + i)
}

const notas = [6.5, 7.5, 8, 9, 7]
for (let i=0; i<notas.length; i++){
    console.log(`Nota = ${notas[i]}`)
}