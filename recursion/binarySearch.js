

function binary(arr,target){

    return  search(arr,target,0,arr.length-1)

    function search (arr,target,left,right){
        if(left>right){
            return -1
        }
        let middle =Math.floor((left+right)/2)
        if(target == arr[middle]){
            return middle
        }

        if(target < middle ){
            return search(arr,target,left,middle-1)
        }
        else{
            return search(arr,target,middle+1,right)
        }
    }
    
}

console.log(binary([1,2,3,4,5,6,7,8,9],5));

//big o  =  o(log n) 
