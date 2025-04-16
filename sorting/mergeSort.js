function merge(arr){
    if(arr.length <2){
return arr
    }

    const  mid = Math.floor(arr.length/2);

    const left = arr.slice(0,mid);
    const right = arr.slice(mid);

    return mergefunction(merge(left),merge(right));

}

function mergefunction(left,right){
    const sorted = [];

    while(left.length && right.length){
        if(left[0]<=right[0]){
            sorted.push(left.shift())
        }else{
  sorted.push(right.shift())
        }
    };
    return [...sorted,...left,...right]
}

let arr = [8,4,5,2,1,4,56,0,7];

console.log(merge(arr));
