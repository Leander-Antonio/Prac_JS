function breakingRecords(scores) {

    let maiorScore = scores[0]
    let menorScore = scores[0]
    let SumMenor = 0
    let SumMaior = 0

    for(let i = 0; i < scores.length; i++){
        if(maiorScore < scores[i]){
            maiorScore = scores[i]
            SumMaior ++
        }else if(menorScore > scores[i]){
            menorScore = scores[i]
            SumMenor ++
        }


    }
    return [SumMaior, SumMenor]

}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])