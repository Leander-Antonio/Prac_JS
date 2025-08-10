function timeConversion(s) {

    s.split('')

    let horas = parseInt(s[0]+s[1]);
    let minutos = s[3] + s[4];
    let segundos = s[6] + s[7];
    let ampm = s[8];

    if(horas >= 12 && ampm === 'A'){
        horas = horas - 12;

    }else if(horas < 12 && ampm === 'P'){
        horas = horas + 12;
    }

    if(horas < 10){
        return (`0${horas}:${minutos}:${segundos}`)
    }else{
        return (`${horas}:${minutos}:${segundos}`)
    }
    

}


console.log(timeConversion('12:05:45AM'))