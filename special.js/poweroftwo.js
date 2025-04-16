function power(n){
    if(n<1){
        return false
    }

    while(n>1){
        if(n%2!==0){
            return false
        }
        n=n/2
    }
    return true
}

console.log(power(3));


//big o = o log n  because it uses while loop and after loop we cut input half every time so ,



function bitwise(n){
    if(n<1){
        return false
    }
    return (n & (n-1)) ==0
}

console.log(bitwise(6));


// bit o = o(1)