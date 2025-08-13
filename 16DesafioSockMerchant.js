function sockMerchant(n, ar) {

    let pares = 0
    ar.sort((a,b)=> a - b)

    for(let j = 0; j < n; j++){
        if(ar[j] === ar[j + 1]){
            pares++
            j++
        }

    }

    return pares

}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])