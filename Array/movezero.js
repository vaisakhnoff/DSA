

let arr = [1,2,3,0,5,0,2,0,252,675]







// function movezeros(arr){
//     let index = 0 ;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!=0){
// arr[index]=arr[i];
// index++
//         }
//     }

//     for(let i  = index; i<arr.length;i++){
//         arr[index]=0
//     }
//     return arr
// }


// console.log(movezeros(arr))




function movezero(arr){
    for(let i =0;i<arr.length;i++){
        if(arr[i]==0){
            arr.splice(i,1);
            arr.push(0)
        }
    }
    return arr
}

console.log(movezero(arr));
