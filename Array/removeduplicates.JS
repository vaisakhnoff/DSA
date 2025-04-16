let arr = [1,2,3,4,3,2,6,5,3,9,0];

function remove(arr){
  arr.sort((a,b) => a-b)
    let index = 0; 

for(let i=1;i<arr.length;i++){
if(arr[i] != arr[i-1]){
    arr[index] =arr[i];
    index++
}

}
arr.length = index;
return arr
}

console.log(remove(arr));
