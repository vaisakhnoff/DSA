function prime (n){
  if(n<2){
    return false 
  }

  for(i=2;i<n;i++){
    if(n%i==0){
        return false;
    }
  }
  return true ;
}

console.log(prime(12));

//big o notation = o(n)


