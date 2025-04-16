function arrsum(arr,index=0){
if(index==arr.length)return 0;

return arr[index]+arrsum(arr,index+1)
}

let arr = [1, 2, 3, 4, 5];
console.log(arrsum(arr)); // Output: 15