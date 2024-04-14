//Write a function to rotate an array to the right by k steps.
/*
a=[1,2,3,4,5,6]
k=2
[6,1,2,3,4,5]
[5,6,1,2,3,4]
ans [5,6,1,2,3,4]
*/
function rotate(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}
console.log(rotate([1, 2, 3, 4, 5, 6], 8));

function rotate1(arr, k) {
  k = k % arr.length;
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}
console.log(rotate1([1, 2, 3, 4, 5, 6], 8));

function rotate2(arr, k) {
  k = k % arr.length;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < k) {
      result.push(arr[arr.length + i - k]);
    } else {
      result.push(arr[i - k]);
    }
  }
  return result;
}
console.log(rotate2([1, 2, 3, 4, 5, 6], 8));

