let arr = [1,2,3,4,5,6,7,8,9];


function insert(arr,position,number){
if(position<0 || position > arr.length){
    console.log("Invalid Number");
    
}
else{
    arr.splice(position,0,number)
}
return arr
}

console.log(insert(arr,4,133));
