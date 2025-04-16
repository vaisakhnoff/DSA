function insert(arr){
    for(let i=1;i<arr.length;i++){
        let insert = arr[i];
        let j = i-1


        while(j>=0 && arr[j]>insert){
            arr[j+1]=arr[j];
            j= j-1;
        }
        arr[j+1]=insert
    }
    return arr
}


let nums = [5, 3, 1, 4, 2];
console.log("Sorted array:", insert(nums));

//big o = o(n^2)