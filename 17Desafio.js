function pageCount(n, p) {
    let comeco = parseInt(p / 2);             
    let final = parseInt(n / 2) - parseInt(p / 2); 

    if(comeco<final){
        return comeco
    }else{
        return final
    }
}



pageCount(7, 4)