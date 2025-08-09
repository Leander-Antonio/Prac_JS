function DesafioStairs(n){
    let tamanho = n
    
    for(let index = 1; index <= tamanho; index +=1 ){

        let linha = " ".repeat(tamanho - index) + '#'.repeat(index) 

        console.log(linha);
    }

}
DesafioStairs(6);
