//Write a function to merge two sorted arrays into a single sorted array.

function singleArray(arr1, arr2) {
  let add = arr1.concat(arr2);
  return add.sort((a, b) => a - b);
}

console.log(singleArray([1, 3, 5, 7, 9], [2, 4, 6, 8, 9]));

function singleArray1(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1.sort((a, b) => a - b);
}

console.log(singleArray1([1, 3, 5, 7, 9], [2, 4, 6, 8, 9]));

function singleArray2(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] > arr1[j]) {
        let temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
      }
    }
  }
  return arr1
}

console.log(singleArray2([1, 3, 5, 7, 9], [2, 4, 6, 8, 9]));

