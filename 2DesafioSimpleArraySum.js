function simpleArraySum(ar) {
    let resultado = 0;

    for(let index = 0; index < ar.length; index += 1){
        resultado = resultado + ar[index];
    }

    return resultado;

}
console.log(simpleArraySum([1, 2, 3]))