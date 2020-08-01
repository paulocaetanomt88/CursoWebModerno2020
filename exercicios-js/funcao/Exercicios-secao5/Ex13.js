let classificaDia = dia => {
    switch (dia) {
        case 1: 
            return "Fim de semana"
            break;
        case 2:
            return "Dia útil"
            break;
        case 3:
            return "Dia útil"
            break;
        case 4:
            return "Dia útil"
            break;
        case 5:
            return "Dia útil"
            break;
        case 6:
                return "Dia útil"
            break;
        case 7:
            return "Fim de semana"
            break;
        default:
            return "Dia invalido"
    }
}

console.log(classificaDia(2))