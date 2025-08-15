function factorial(n){
    let fatorial = n;
    let resultado = 1

    for(let i = 0; i<n; i++){
        if(fatorial !== 0){
            resultado *= fatorial 
            fatorial--
        }
    }
    return resultado

}

factorial(4)