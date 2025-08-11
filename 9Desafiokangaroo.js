function kangaroo(x1, v1, x2, v2) {

    if (v1 <= v2 && x1 < x2){
        console.log('NO');
        return 'NO'
    }
    else {
        while (x1 <= x2) {
            x1 += v1;
            x2 += v2;
        
            if (x1 === x2) {
                console.log('YES');
                return 'YES'
            }
        }
    console.log('NO');
    return "NO"  
    }
}


kangaroo(45 , 7, 56, 2)