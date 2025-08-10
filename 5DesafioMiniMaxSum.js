function miniMaxSum(arr) {
    let soma = 0;
    let maior = 0
    let menor = arr[0];

    for( let index = 0; index < arr.length ; index ++){
        if(arr[index] > maior){
            maior = arr[index]
        }
        if(arr[index]<menor){
            menor = arr[index]         
        }
        soma = arr[index] + soma
    }

    let maximo = soma - menor
    let minimo = soma - maior


    console.log(minimo, maximo)

}


miniMaxSum([5, 5, 5, 5, 5])