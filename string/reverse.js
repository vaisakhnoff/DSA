function reverse(str){
   str =  str.split('')

   const left =0 ; const right = str.length-1;

   while(left<right){
    [str[left],str[right]] = [str[right],str[left]];
   }
   left++;
   right--
  return  str.join(' ')
}

console.log(reverse("race car"))

