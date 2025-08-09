function DesafioCamel(s){
    
let quantidade = 1
let tamanho = s.length

    for(let index = 0; index < tamanho ; index += 1){
        let letra = s.charAt(index);
        if (letra >= 'A' && letra <= 'Z') {
            quantidade += 1;
        }
    }
    return quantidade;
}

console.log(DesafioCamel("saveChangesInTheEditor"));  
