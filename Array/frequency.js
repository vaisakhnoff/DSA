let arr = [1,2,3,4,5,6,7,8,9];



// function frequency(arr){
//      let obj = {};
// for(let i =0 ;i<arr.length;i++){
//     let element =arr[i];

// if(obj[element]==undefined){
//     obj[element]=1
// }
// else{
//     obj[element]++
// }

// }
// return obj 
// }

// console.log(frequency(arr));



  function frequency2(arr){
    obj = {};
    for(let value of arr){
        obj[value] = (obj[value] || 0)+1
    }

    return obj
  }

  console.log(frequency2(arr));
  
