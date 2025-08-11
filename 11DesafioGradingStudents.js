function gradingStudents(grades) {   
    let resultado = []
    
    for(let i = 0; i < grades.length; i++){

        if(grades[i] >= 38){
            let mult = grades[i]%5;
            let valor = grades[i] - grades[i]%5;
            if(mult>=3){               
                valor = valor + mult+1; 
                resultado.push(grades[i]+ (5 - mult))                
            }else{
                resultado.push(grades[i])                
            }
        } else{
            resultado.push(grades[i])            
        }
    }
    return resultado
}


gradingStudents([71, 69, 38, 33])