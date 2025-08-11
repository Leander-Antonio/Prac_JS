function diagonalDifference(arr) {

    let prime = 0;
    let secun = 0;
    let tamanho = arr.length;
  
    for (let index = 0; index < tamanho; index++) {
        prime = prime + arr[index][index];     
    }
    for (let index = 0; index < tamanho; index++) {
        secun = secun + arr[index][tamanho - 1 - index]        
    }
    return Math.abs(prime - secun);
}


diagonalDifference([[11, 2, 4],    
                    [4, 5, 6],      
                    [10, 8, -12]])