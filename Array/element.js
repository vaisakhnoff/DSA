function searchElement(arr,element){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === element){
            return i;
        }
    }
    return -1;
}
let array3 = [1, 2, 3, 4];
console.log(searchElement(array3, 3)); 
console.log(searchElement(array3, 5)); 