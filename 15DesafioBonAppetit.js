function bonAppetit(bill, k, b) {

    let soma = 0
    let refound = 0

    for(let i = 0; i < bill.length; i++){
        if(k != i){
            soma = soma+bill[i]          
        }else{
            soma = soma
        }
    }
    let resultado = soma/2

    if(resultado != b){
        refound =  b - resultado
        console.log(refound)
    }else{
        console.log("Bon Appetit")
    }
}

bonAppetit([3, 10, 2, 9], 1, 12)