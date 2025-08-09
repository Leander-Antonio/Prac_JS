function aVeryBigSum(ar) {
    
    let resultado = 0;

    for(let index = 0; index < ar.length; index ++){
        resultado = (resultado+ar[index])

    }
    return resultado;


}


console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))