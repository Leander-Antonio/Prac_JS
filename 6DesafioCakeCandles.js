function birthdayCakeCandles(candles) {
    let soma = 0;
    let maior = 0;

    for(let index = 0; index < candles.length; index++){

        if(candles[index]>maior){
            maior = candles[index];
        }
    }
    for(let index = 0; index < candles.length; index++){
        if (candles[index]==maior){
            soma = soma += 1;
        }
    }
    return soma;
}
birthdayCakeCandles([5, 5, 3, 5])