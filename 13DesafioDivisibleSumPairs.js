function divisibleSumPairs(n, k, ar) {

    let divisor = k
    let j = 1
    let resultado = 0

    for(let i = 0; i < n; i++){
        
        for(; j < n; j++){
            let soma = ar[i] + ar[j];
            if(soma%divisor === 0){
                resultado++
            }
        }
        j = i+2
        
    }
    return resultado

}


divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])

