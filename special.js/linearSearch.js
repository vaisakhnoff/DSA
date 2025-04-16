
let arr = [1,2,3,4,5,6,7,8];
let target = 2;
function search(arr,target){
for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
        return i
    }
}
return -1
}


console.log(search(arr,target));

//big o = o(n)