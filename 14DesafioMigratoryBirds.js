function migratoryBirds(arr) {
    let placar = [0, 0, 0, 0, 0]
    let mais = 0
    let resultado = 0 

    for(let i = 0; i < arr.length; i++){
        if(arr[i]=== 1){
            placar[0]++
        }else if(arr[i]===2){
            placar[1]++
        }else if(arr[i]===3){
            placar[2]++
        }else if(arr[i]===4){
            placar[3]++
        }else if(arr[i]===5){
            placar[4]++
        }
    }

    for(let i = 0; i < placar.length; i++){
        if(placar[i]>mais){
            mais = placar[i]
            resultado = i+1
        }
    }

    return resultado
}

migratoryBirds([1, 4, 4, 4, 5, 3])
