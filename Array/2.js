arr = [6,1,6,8,10,4,15,6,3,9,6];
let target =6

//time complexity = o(n^2);
//space complexity = o(1)

for(let i=0;i<arr.length;i++){
if(arr[i]==target){
    arr.splice(i,1);
    arr.push(target)
}


}
console.log(arr);



   

//time complexity = o(n^2);
//space complexity = o(1)

arr2 = [6,1,6,8,10,4,15,6,3,9,6];

let temp =0; 

for(let k=0;k<arr2.length-1;k++){
    for(let j=arr2.length-1;j>0;j--){
if(arr2[k]==target){
temp = arr2[j];
arr2[j]=arr2[k];
arr2[k]=temp
break;
}
    }
}
console.log(arr2);
