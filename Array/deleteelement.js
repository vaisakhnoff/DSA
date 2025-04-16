function deleteElement(arr,position){
    for(let i=position;i<arr.length;i++){
        arr[i] = arr[i+1];
    }
    arr.length--;
    return arr;
}
let arr = [1,2,3,4,5,6,7];
console.log(deleteElement(arr,3))