function fibanocci(n){
   if(n<2){
    return n
   }

    return fibanocci(n-1) + fibanocci(n-2);
}

console.log(fibanocci(7));

//big o  = o(2^n)