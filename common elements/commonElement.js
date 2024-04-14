//Write a function to find the common elements between two arrays.
/*
a=[1,2,3,4,5,6,7,8,9]
b=[4,5,6,14,12,17,13]
ans [4,5,6]
*/

//looping method
function common(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        result.push(arr1[i]);
        break;
      }
    }
  }
  return result
}

console.log(common([1,2,3,4,5],[3,4,5,6,7]))

//include method
function common1(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      if(arr2.includes(arr1[i])){
        result.push(arr1[i])
      }
    }
    return result
  }
  
  console.log(common1([1,2,3,4,5],[3,4,5,6,7]))