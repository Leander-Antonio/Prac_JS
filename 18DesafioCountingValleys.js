function countingValleys(steps, path) {
    let passos = steps
    let caminho = path
    let mar = 0
    let resultado = 0

    for(let i = 0; i < passos; i++){
        if(caminho[i]==="U"){
            mar++;
                if(mar == 0){
                    resultado++
                }
        }else if(caminho[i]==="D"){
            mar--;

        }
    }
    console.log(resultado)
    return (resultado)
}


countingValleys(10, ["U","D","U","U","U","D","U","D","D","D"])
countingValleys(12, ['D','D','U','U','D','D','U','D','U','U','U','D'])