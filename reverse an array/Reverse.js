// Write a function to reverse an array in place.
/*
a=[1,2,3,4,5];
ans[5,4,3,2,1]
*/
//looping
function reversed(arr) {
  let start = 0;
  let end = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (start < end) {
        let temp=arr[start]
      arr[start] = arr[end];
      arr[end] = temp
      start++;
      end--;
    }
  }
  return arr;
}
console.log(reversed([1, 2, 3, 4, 5]));
console.log(reversed(["R", "A", "G", "U", "L"]));
console.log(reversed(["R", "A", "G", "U"]));

//reverse method
function reversed1(arr){
  return arr.reverse();
}
console.log(reversed1([1, 2, 3, 4, 5]));
console.log(reversed1(["R", "A", "G", "U", "L"]));