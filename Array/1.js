// space complexity = o(1);
//time complexity = o(n) *o(n) = o(n^2)
let arr = [1,2,3,5,2,6,4];

let key =10;
let bb = [];

function result(arr,key){
for (let i=0;i<arr.length;i++){
    for (let j=i+1;j<arr.length; j++){
        if(arr[i]+arr[j]==key){
            bb.push(arr[i],arr[j])

        }
    }
}
console.log(bb);

}

result(arr,key)



//space complexity = o(n)
//     time complexity = o(n)



let set = new Set();

for(let k=0;k<arr.length;k++){
   let  num = arr[k];

  let  match = key - num ;

  if(set.has(match)){
    console.log([num,match])
  }
  else{
    set.add(num)
  }
}