
let arr1 = [1, 2, 2, 3, 4];
let arr2 = [2, 2, 4, 6];

function intersects(arr1,arr2){
let i=0;
let j=0;
let result = [];

arr1.sort((a,b)=>a-b);
arr2.sort((a,b)=>a-b);

while(i<arr1.length && j<arr2.length){
if(arr1[i]==arr2[j]){
result.push(arr1[i]);
i++;
j++
}
else if(arr1[i] <arr2[j]){
    i++
}
else{
    j++
}
}
return result 
}
console.log(intersects(arr1,arr2))


//with duplicates


function intersect(arr1,arr2){
result = []
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);


    for(let value of set1){
        if(set2.has(value)){
result.push(value)
        }
    }
    return result 
}

console.log(intersect(arr1,arr2))