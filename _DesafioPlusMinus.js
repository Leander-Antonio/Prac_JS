function DesafioPlusMinus(arr) {
    let positive = 0, zero = 0, negative = 0;
    let tamanho = arr.length;

    for(let index = 0; index < tamanho; index += 1){
        if(arr[index] > 0){ 
            positive ++;
        } 
        else if (arr[index] == 0){
            zero ++;
        } 
        else if (arr[index] < 0){
            negative ++;
        }
    }

    console.log((positive / tamanho).toFixed(6));
    console.log((negative / tamanho).toFixed(6));
    console.log((zero / tamanho).toFixed(6));

};

DesafioPlusMinus([-4, 3, -9, 0, 4, 1]);

DesafioPlusMinus([1, 2, 3, -1, -2, -3, 0, 0]);
