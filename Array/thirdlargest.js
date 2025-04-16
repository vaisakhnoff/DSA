function largest(arr,k){
    let largest = null;
    let second = null;
    let third = null;
    for(let num of arr){
        if(num > largest){
            third = second;
            second = largest;
            largest = num;
        }else if(num > second && num < largest){
            third = second;
            second = num;
        }else if(num > third && num < second){
            third = num
        }
    }
    return k === 1?largest:k===2?second:k===3?third:null
}
console.log(largest([8,4,3,2,1,6,7,5],1))
console.log(largest([8,4,3,2,1,6,7,5],2))
console.log(largest([8,4,3,2,1,6,7,5],3))
console.log(largest([8,4,3,2,1,6,7,5],4))