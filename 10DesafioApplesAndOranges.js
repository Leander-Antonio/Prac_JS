function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let macaSoma = 0;
    let laranjaSoma = 0;

    for(let index = 0; index < apples.length; index++){
        let posicao = (a+apples[index])
        if((posicao >= s && posicao <= t)){
            macaSoma ++;
        }
    }
    for(let index = 0; index < oranges.length; index++){
        let posicao = (b+oranges[index])
        if((posicao >= s && posicao <= t)){
            laranjaSoma ++;
        }
    }
    console.log(macaSoma);
    console.log(laranjaSoma);

}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])