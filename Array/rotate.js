function rotate(arr,k){
    k = k % arr.length;
    if (k === 0) return arr;
    let temp = [];
    for(let i = arr.length-k; i < arr.length; i++){
        temp.push(arr[i]);
    }
    for(let i = arr.length-1;i >= k;i--){
        arr[i] = arr[i-k];
    }
    for(let i=0;i<k;i++){
        arr[i]=temp[i]
    }
    return arr;

}


let arr = [1, 2, 3, 4, 5];
console.log(rotate(arr,2));
