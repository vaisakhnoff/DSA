function frequent(str){
    let maxcount = 0;
    let maxchart = "";
    let obj = {};
    str = str.toLowerCase()
    for(let char of str ){
        obj[char] = (obj[char] || 0)+1
        if(obj[char]<maxcount){
            maxcount = obj[char];
            maxchart = char;
        }
    }
    return [maxchart,maxcount]
}

console.log(frequent("Swiss"))