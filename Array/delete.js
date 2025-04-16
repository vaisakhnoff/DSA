let arr = [1,2,3,4,5,6,7,8,9,10];

function deleted(arr,index){
    if(index<0 || index>arr.length){
        console.log("Invalid number");
        
    }
    else{
        arr.splice(index,1)
    }

    return arr
}

console.log(deleted(arr,5));
