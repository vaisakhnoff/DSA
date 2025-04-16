
function bubbleSort(arr){
    let swapped 
do{

     swapped = false;
for(let i =0;i<arr.length-1;i++){
    if(arr[i]>arr[i+1]){
    let temp = arr[i];
    arr[i]=arr[i+1];
    arr[i+1]=temp;
    swapped = true;
    }

}
}while(swapped)
    return arr
}

let arr = [4,6,2,34,7,9,4,2,57,99,8]

console.log(bubbleSort(arr));

//big o = o(n^2)  two loops 
