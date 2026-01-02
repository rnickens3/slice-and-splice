# Slice and Splice
Function combines two arrays together at an index
Assignment provided by FreeCodeCamp.org

## User Stories
1. Create a frankenSplice function that accepts two arrays and an index.
2. Copy each element of the first array into the second array, in order, beginning at the given index, and return the resulting array.
3. The input arrays should remain the same after the function runs.

## Tools & Languages Used
* JavaScript

## Features
* User should be able to place any two arrays in function and an index to combine the two arrays

## Concepts Learned
* Concat method
* Slice method
* Mutation vs non-mutation methods

## Examples
```
JavaScript

function frankenSplice(arr1, arr2, index) {
  let result = [];

  result = arr2.slice(0, index).concat(arr1).concat(arr2.slice(index));

  return result;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))
// [4, 1, 2, 3, 5]

```

## How to Run
1. Clone the repository
2. Run the script using Node.js or import the function into any JS file
