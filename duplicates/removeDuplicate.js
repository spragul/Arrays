//Write a function to remove duplicates from an array.
/*
a=[1,2,3,4,5,2,6,8,4,1]
ans [2,4,1]
*/
//Filter method
function duplicates(arr) {
  return arr.filter((val, index) => arr.indexOf(val) == index);
}

console.log(duplicates([1, 2, 3, 4, 5, 2, 6, 8, 4, 1]));

//looping
function duplicates1(arr) {
    let result=[];
 for(let i=0;i<arr.length;i++){
    let count=0;
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++;
        }
    }
    if(count>=1){
        
    }else{
        result.push(arr[i])
    }
 }
 return result
}

console.log(duplicates1([1, 2, 3, 4, 5, 2, 6, 8, 4, 1]));

//set method
function duplicates2(arr) {
    return [...new Set(arr)]
  }
  console.log(duplicates2([1, 2, 3, 4, 5, 2, 6, 8, 4, 1]));

  //includes
  function duplicates3(arr) {
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(result.includes(arr[i])){

        }else{
            result.push(arr[i])
        }
    }
    return result
  }
  
  console.log(duplicates3([1, 2, 3, 4, 5, 2, 6, 8, 4, 1]));