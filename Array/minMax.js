let arr = [1,2,3,5,6,8,7,4,3,80];

function minmax(arr){
    let min = arr[0];
    let max = arr[0];

    for(let i =0;i<arr.length;i++){

        
        if(arr[i]>max) max = arr[i];
        if(arr[i]<min) min= arr[i];
    }
    return {min,max}
}

console.log(minmax(arr));

