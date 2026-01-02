/*
Assignment provided by FreeCodeCamp.org

Completed: January 1st, 2026
Program Description: Function combines two arrays together at an index
Concepts Utlized: Concat and slice methods. Mutation vs non-mutation methods.

User Stories:
1. Create a frankenSplice function that accepts two arrays and an index.
2. Copy each element of the first array into the second array, in order, beginning at the given index, and return the resulting array.
3. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, index) {
  let result = [];

  result = arr2.slice(0, index).concat(arr1).concat(arr2.slice(index)); // This will combine the two arrays together at the index provided
                                                                        // I learned there are many methods that mutate arrays. These two methods do not.
  return result;
}
